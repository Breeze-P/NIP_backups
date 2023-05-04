import brainpy as bp
from brainpy import synapses, neurons
import matplotlib.pyplot as plt
# >>>
neu1 = neurons.HH(1)
neu2 = neurons.HH(1)
syn1 = synapses.NMDA(neu1, neu2, bp.connect.All2All(), E=0.)
net = bp.Network(pre=neu1, syn=syn1, post=neu2)
# >>>
runner = bp.DSRunner(net, inputs=[('pre.input', 5.)], monitors=['pre.V', 'post.V', 'syn.g', 'syn.x'])
runner.run(150.)
# >>>
fig, gs = bp.visualize.get_figure(2, 1, 3, 8)
fig.add_subplot(gs[0, 0])
plt.plot(runner.mon.ts, runner.mon['pre.V'], label='pre-V')
plt.plot(runner.mon.ts, runner.mon['post.V'], label='post-V')
plt.legend()
# >>>
fig.add_subplot(gs[1, 0])
plt.plot(runner.mon.ts, runner.mon['syn.g'], label='g')
plt.plot(runner.mon.ts, runner.mon['syn.x'], label='x')
plt.legend()
plt.show()
