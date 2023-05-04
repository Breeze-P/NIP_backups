import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-3, 3, 1000)
bp.visualize.get_figure(1, 1, 4, 6)
grads = bm.vector_grad(bm.surrogate.leaky_relu)(xs, 0., 1.)
plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=0., \beta=1.$')
plt.legend()
plt.show()
