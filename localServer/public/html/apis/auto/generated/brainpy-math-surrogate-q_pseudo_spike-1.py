import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-3, 3, 1000)
bp.visualize.get_figure(1, 1, 4, 6)
for alpha in [0.5, 1., 2., 4.]:
  grads = bm.vector_grad(bm.surrogate.q_pseudo_spike)(xs, alpha)
  plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=$' + str(alpha))
plt.legend()
plt.show()
