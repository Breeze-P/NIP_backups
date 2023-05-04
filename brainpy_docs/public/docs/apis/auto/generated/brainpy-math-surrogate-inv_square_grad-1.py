import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-1, 1, 1000)
for alpha in [1., 10., 100.]:
  grads = bm.vector_grad(bm.surrogate.inv_square_grad)(xs, alpha)
  plt.plot(xs, grads, label=r'$\alpha$=' + str(alpha))
plt.legend()
plt.show()
