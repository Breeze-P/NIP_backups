import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
bp.visualize.get_figure(1, 1, 4, 6)
xs = bm.linspace(-3, 3, 1000)
grads = bm.vector_grad(bm.surrogate.s2nn)(xs, 4., 1.)
plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=4, \beta=1$')
grads = bm.vector_grad(bm.surrogate.s2nn)(xs, 8., 2.)
plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=8, \beta=2$')
plt.legend()
plt.show()
