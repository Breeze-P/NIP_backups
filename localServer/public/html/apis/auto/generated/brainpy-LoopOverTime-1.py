import brainpy as bp
import brainpy.math as bm
import matplotlib.pyplot as plt
# >>>
hh = bp.neurons.HH(1)
over_time = bp.LoopOverTime(hh, out_vars=hh.V)
# >>>
# running with a given duration
_, potentials = over_time(100.)
plt.plot(bm.as_numpy(potentials), label='with given duration')
# >>>
# running with the given inputs
_, potentials = over_time(bm.ones(1000) * 5)
plt.plot(bm.as_numpy(potentials), label='with given inputs')
plt.legend()
plt.show()
