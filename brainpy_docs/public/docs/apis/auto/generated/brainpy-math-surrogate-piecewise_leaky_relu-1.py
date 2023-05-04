import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
bp.visualize.get_figure(1, 1, 4, 6)
xs = bm.linspace(-3, 3, 1000)
for c in [0.01, 0.05, 0.1]:
  for w in [1., 2.]:
    grads1 = bm.vector_grad(bm.surrogate.piecewise_leaky_relu)(xs, c=c, w=w)
    plt.plot(bm.as_numpy(xs), bm.as_numpy(grads1), label=f'x={c}, w={w}')
plt.legend()
plt.show()
