import brainpy as bp
import brainpy.math as bm
# >>>
class HH(bp.dyn.NeuGroup):
  def __init__(self, size, ENa=55., EK=-90., EL=-65, C=1.0, gNa=35., gK=9.,
               gL=0.1, V_th=20., phi=5.0, name=None):
    super(HH, self).__init__(size=size, name=name)
# >>>
    # parameters
    self.ENa = ENa
    self.EK = EK
    self.EL = EL
    self.C = C
    self.gNa = gNa
    self.gK = gK
    self.gL = gL
    self.V_th = V_th
    self.phi = phi
# >>>
    # variables
    self.V = bm.Variable(bm.ones(size) * -65.)
    self.h = bm.Variable(bm.ones(size) * 0.6)
    self.n = bm.Variable(bm.ones(size) * 0.32)
    self.spike = bm.Variable(bm.zeros(size, dtype=bool))
    self.input = bm.Variable(bm.zeros(size))
# >>>
    # functions
    derivative = bp.JointEq([self.dh, self.dn, self.dV])
    self.integral = bp.ode.ExponentialEuler(derivative)
# >>>
  def dh(self, h, t, V):
    alpha = 0.07 * bm.exp(-(V + 58) / 20)
    beta = 1 / (bm.exp(-0.1 * (V + 28)) + 1)
    dhdt = self.phi * (alpha * (1 - h) - beta * h)
    return dhdt
# >>>
  def dn(self, n, t, V):
    alpha = -0.01 * (V + 34) / (bm.exp(-0.1 * (V + 34)) - 1)
    beta = 0.125 * bm.exp(-(V + 44) / 80)
    dndt = self.phi * (alpha * (1 - n) - beta * n)
    return dndt
# >>>
  def dV(self, V, t, h, n, Iext):
    m_alpha = -0.1 * (V + 35) / (bm.exp(-0.1 * (V + 35)) - 1)
    m_beta = 4 * bm.exp(-(V + 60) / 18)
    m = m_alpha / (m_alpha + m_beta)
    INa = self.gNa * m ** 3 * h * (V - self.ENa)
    IK = self.gK * n ** 4 * (V - self.EK)
    IL = self.gL * (V - self.EL)
    dVdt = (- INa - IK - IL + Iext) / self.C
# >>>
    return dVdt
# >>>
  def update(self, tdi):
    h, n, V = self.integral(self.h, self.n, self.V, tdi.t, self.input, dt=tdi.dt)
    self.spike.value = bm.logical_and(self.V < self.V_th, V >= self.V_th)
    self.V.value = V
    self.h.value = h
    self.n.value = n
    self.input[:] = 0.
# >>>
run = bp.dyn.DSRunner(HH(1), inputs=('input', 2.), monitors=['V'], dt=0.05)
run(100)
bp.visualize.line_plot(run.mon.ts, run.mon.V, legend='V', show=True)
