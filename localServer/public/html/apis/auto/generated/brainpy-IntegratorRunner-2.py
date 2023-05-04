import brainpy as bp
import brainpy.math as bm
# stochastic Lorenz system
sigma=10; beta=8 / 3; rho=28
g = lambda x, y, z, t, p: (p * x, p * y, p * z)
f = lambda x, y, z, t, p: [sigma * (y - x), x * (rho - z) - y, x * y - beta * z]
lorenz = bp.sdeint(f, g, method='milstein2')
# >>>
runner = bp.IntegratorRunner(
  lorenz,
  monitors=['x', 'y', 'z'],
  inits=[1., 1., 1.], # initialize all variable to 1.
  dt=0.01
)
runner.run(100., args={'p': 0.1},)
# >>>
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.gca(projection='3d')
plt.plot(runner.mon.x.squeeze(), runner.mon.y.squeeze(), runner.mon.z.squeeze())
ax.set_xlabel('x')
ax.set_xlabel('y')
ax.set_xlabel('z')
plt.show()
