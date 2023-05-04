import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
# >>>
group = bp.neurons.HH(2)
# >>>
I1 = bp.inputs.spike_input(sp_times=[500., 550., 1000, 1030, 1060, 1100, 1200], sp_lens=5, sp_sizes=5., duration=2000, )
I2 = bp.inputs.spike_input(sp_times=[600., 900, 950, 1500], sp_lens=5, sp_sizes=5., duration=2000, )
I1 += bp.math.random.normal(0, 3, size=I1.shape)
I2 += bp.math.random.normal(0, 3, size=I2.shape)
I = bm.stack((I1, I2), axis=-1)
# >>>
runner = bp.DSRunner(group, monitors=['V'], inputs=('input', I, 'iter'))
runner.run(2000.)
# >>>
fig, gs = bp.visualize.get_figure(1, 1, 3, 8)
fig.add_subplot(gs[0, 0])
plt.plot(runner.mon.ts, runner.mon.V[:, 0])
plt.plot(runner.mon.ts, runner.mon.V[:, 1] + 130)
plt.xlim(10, 2000)
plt.xticks([])
plt.yticks([])
plt.show()
