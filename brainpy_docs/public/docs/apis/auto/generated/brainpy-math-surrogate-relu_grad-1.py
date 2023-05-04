import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
xs = bm.linspace(-3, 3, 1000)
bp.visualize.get_figure(1, 1, 4, 6)
for s in [0.5, 1.]:
  for w in [1, 2.]:
    grads = bm.vector_grad(bm.surrogate.relu_grad)(xs, s, w)
    plt.plot(bm.as_numpy(xs), bm.as_numpy(grads), label=r'$\alpha=$' + f'{s}, width={w}')
plt.legend()
plt.show()
