import brainpy as bp
import matplotlib.pyplot as plt
# >>>
a=0.7;  b=0.8;  tau=12.5;  Vth=1.9
V = 0;  w = 0  # initial values
# >>>
@bp.odeint(method='rk4', dt=0.04)
def integral(V, w, t, Iext):
  dw = (V + a - b * w) / tau
  dV = V - V * V * V / 3 - w + Iext
  return dV, dw
# >>>
hist_V = []
for t in bp.math.arange(0, 100, integral.dt):
    V, w = integral(V, w, t, 0.5)
    hist_V.append(V)
plt.plot(bp.math.arange(0, 100, integral.dt), hist_V)
plt.show()
