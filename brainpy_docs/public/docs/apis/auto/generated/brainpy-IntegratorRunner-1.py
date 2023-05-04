import brainpy as bp
import brainpy.math as bm
a=0.7; b=0.8; tau=12.5
dV = lambda V, t, w, I: V - V * V * V / 3 - w + I
dw = lambda w, t, V, a, b: (V + a - b * w) / tau
integral = bp.odeint(bp.JointEq([dV, dw]), method='exp_auto')
# >>>
runner = bp.IntegratorRunner(
         integral,  # the simulation target
         monitors=['V', 'w'],  # the variables to monitor
         inits={'V': bm.random.rand(10),
                'w': bm.random.normal(size=10)},  # the initial values
)
runner.run(100.,
           args={'a': 1., 'b': 1.},  # update arguments
           dyn_args={'I': bp.inputs.ramp_input(0, 4, 100)},  # each time each current input
)
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, plot_ids=[0, 1, 4], show=True)
