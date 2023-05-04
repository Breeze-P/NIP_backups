import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
bp.visualize.get_figure(1, 1, 4, 6)
xs = bm.linspace(-3, 3, 1000)
for n in [2, 4, 8]:
  grads1 = bm.vector_grad(bm.surrogate.squarewave_fourier_series)(xs, n=n)
  plt.plot(bm.as_numpy(xs), bm.as_numpy(grads1), label=f'n={n}')
plt.legend()
plt.show()
