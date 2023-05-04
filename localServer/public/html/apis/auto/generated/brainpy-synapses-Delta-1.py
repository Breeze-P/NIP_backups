import brainpy as bp
from brainpy import synapses, neurons
import matplotlib.pyplot as plt
# >>>
neu1 = neurons.LIF(1)
neu2 = neurons.LIF(1)
syn1 = synapses.Alpha(neu1, neu2, bp.connect.All2All(), g_max=5.)
net = bp.Network(pre=neu1, syn=syn1, post=neu2)
# >>>
runner = bp.DSRunner(net, inputs=[('pre.input', 25.), ('post.input', 10.)], monitors=['pre.V', 'post.V', 'pre.spike'])
runner.run(150.)
# >>>
fig, gs = bp.visualize.get_figure(1, 1, 3, 8)
plt.plot(runner.mon.ts, runner.mon['pre.V'], label='pre-V')
plt.plot(runner.mon.ts, runner.mon['post.V'], label='post-V')
plt.xlim(40, 150)
plt.legend()
plt.show()
