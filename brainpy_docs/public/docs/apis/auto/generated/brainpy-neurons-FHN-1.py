import brainpy as bp
fhn = bp.neurons.FHN(1)
runner = bp.DSRunner(fhn, inputs=('input', 1.), monitors=['V', 'w'])
runner.run(100.)
bp.visualize.line_plot(runner.mon.ts, runner.mon.w, legend='w')
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, legend='V', show=True)
