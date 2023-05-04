import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-3, 3, 1000)
bp.visualize.get_figure(1, 1, 4, 6)
for s in [0.5, 1., 2.]:
  grads = bm.vector_grad(bm.surrogate.gaussian_grad)(xs, s, 0.5)
  plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=0.5, \sigma=$' + str(s))
plt.legend()
plt.show()
