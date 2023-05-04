import brainpy as bp
group = bp.neurons.HH(2)
runner = bp.DSRunner(group, monitors=['V'], inputs=('input', 10.))
runner.run(200.)
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, show=True)
