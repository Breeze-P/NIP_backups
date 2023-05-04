import brainpy as bp
group = bp.neurons.ExpIF(1)
runner = bp.DSRunner(group, monitors=['V'], inputs=('input', 10.))
runner.run(300., )
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, ylabel='V', show=True)
