import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-3, 3, 1000)
bp.visualize.get_figure(1, 1, 4, 6)
grads = bm.vector_grad(bm.surrogate.multi_gaussian_grad)(xs)
plt.plot(bm.as_numpy(xs), bm.as_numpy(grads))
plt.show()
