class EINet(bp.Network):
  def __init__(self, scale=1.0, method='exp_auto'):
    # network size
    num_exc = int(3200 * scale)
    num_inh = int(800 * scale)

    # neurons
    pars = dict(V_rest=-60., V_th=-50., V_reset=-60., tau=20., tau_ref=5.,
                V_initializer=bp.init.Normal(-55., 2.))
    E = bp.neurons.LIF(num_exc, **pars, method=method)
    I = bp.neurons.LIF(num_inh, **pars, method=method)

    # synapses
    we = 0.6 / scale  # excitatory synaptic weight (voltage)
    wi = 6.7 / scale  # inhibitory synaptic weight
    E2E = bp.synapses.Exponential(E, E, bp.conn.FixedProb(prob=0.02),
                                  g_max=we, tau=5., method=method,
                                  output=bp.synouts.COBA(E=0.))
    E2I = bp.synapses.Exponential(E, I, bp.conn.FixedProb(prob=0.02),
                                  g_max=we, tau=5., method=method,
                                  output=bp.synouts.COBA(E=0.))
    I2E = bp.synapses.Exponential(I, E, bp.conn.FixedProb(prob=0.02),
                                  g_max=wi, tau=10., method=method,
                                  output=bp.synouts.COBA(E=-80.))
    I2I = bp.synapses.Exponential(I, I, bp.conn.FixedProb(prob=0.02),
                                  g_max=wi, tau=10., method=method,
                                  output=bp.synouts.COBA(E=-80.))

    super(EINet, self).__init__(E2E, E2I, I2E, I2I, E=E, I=I)



pops = []
conns = [(pre, post, conn)]


neuron_list = {
    'lif': bp.neurons.LIF,
}
syn_list = {

}



class Net(bp.Network):
    def __init__(self, pops, conns):
        self.pops = bm.NodeDict()
        for p in pops:
            self.pops[p] = neuron_list[p](*argsm **kwarg)
        self.conns = bm.NodeDict()
        for pre, post, conn in conns:
            self.conns[aaa] = syn_list[conn](self.pops[pre], self.pops[post], *aargs, **)












