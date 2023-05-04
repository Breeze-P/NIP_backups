import brainpy.math as bm
import brainpy as bp
import matplotlib.pyplot as plt
# >>>
bp.math.set_dt(dt=0.01)
bp.ode.set_default_odeint('rk4')
# >>>
types = ['quiescence', 'spiking', 'bursting', 'irregular_spiking', 'irregular_bursting']
bs = bm.array([1.0, 3.5, 2.5, 2.95, 2.8])
Is = bm.array([2.0, 5.0, 3.0, 3.3, 3.7])
# >>>
# define neuron type
group = bp.neurons.HindmarshRose(len(types), b=bs)
runner = bp.DSRunner(group, monitors=['V'], inputs=['input', Is],)
runner.run(1e3)
# >>>
fig, gs = bp.visualize.get_figure(row_num=3, col_num=2, row_len=3, col_len=5)
for i, mode in enumerate(types):
    fig.add_subplot(gs[i // 2, i % 2])
    plt.plot(runner.mon.ts, runner.mon.V[:, i])
    plt.title(mode)
    plt.xlabel('Time [ms]')
plt.show()
