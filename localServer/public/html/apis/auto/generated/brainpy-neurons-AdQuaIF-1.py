import brainpy as bp
group = bp.neurons.AdQuaIF(1, )
runner = bp.DSRunner(group, monitors=['V', 'w'], inputs=('input', 30.))
runner.run(300)
fig, gs = bp.visualize.get_figure(2, 1, 3, 8)
fig.add_subplot(gs[0, 0])
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, ylabel='V')
fig.add_subplot(gs[1, 0])
bp.visualize.line_plot(runner.mon.ts, runner.mon.w, ylabel='w', show=True)
