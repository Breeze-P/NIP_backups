import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
bp.visualize.get_figure(1, 1, 4, 6)
xs = bm.linspace(-2, 2, 1000)
for alpha in [1., 2., 4.]:
  grads = bm.vector_grad(bm.surrogate.sigmoid)(xs, alpha)
  plt.plot(xs, grads, label=r'$\alpha$=' + str(alpha))
plt.legend()
plt.show()
