import brainpy as bp
# >>>
group = bp.neurons.QuaIF(1,)
# >>>
runner = bp.DSRunner(group, monitors=['V'], inputs=('input', 20.))
runner.run(duration=200.)
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, show=True)
