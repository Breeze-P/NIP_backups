import brainpy as bp
# >>>
group = bp.neurons.MorrisLecar(1)
runner = bp.DSRunner(group, monitors=['V', 'W'], inputs=('input', 100.))
runner.run(1000)
# >>>
fig, gs = bp.visualize.get_figure(2, 1, 3, 8)
fig.add_subplot(gs[0, 0])
bp.visualize.line_plot(runner.mon.ts, runner.mon.W, ylabel='W')
fig.add_subplot(gs[1, 0])
bp.visualize.line_plot(runner.mon.ts, runner.mon.V, ylabel='V', show=True)
