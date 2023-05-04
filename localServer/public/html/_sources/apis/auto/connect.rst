``brainpy.connect`` module
==========================

.. currentmodule:: brainpy.connect 
.. automodule:: brainpy.connect 

.. contents::
   :local:
   :depth: 1

Base Connection Classes and Tools
---------------------------------

.. autosummary::
   :toctree: generated/

   set_default_dtype
   mat2coo
   mat2csc
   mat2csr
   csr2csc
   csr2mat
   csr2coo
   coo2csr
   coo2csc
   coo2mat
   MAT_DTYPE
   IDX_DTYPE
   Connector
   TwoEndConnector
   OneEndConnector
   CONN_MAT
   PRE_IDS
   POST_IDS
   PRE2POST
   POST2PRE
   PRE2SYN
   POST2SYN
   SUPPORTED_SYN_STRUCTURE


Custom Connections
------------------

.. autosummary::
   :toctree: generated/

   MatConn
   IJConn
   CSRConn
   SparseMatConn


Random Connections
------------------

.. autosummary::
   :toctree: generated/

   FixedProb
   FixedPreNum
   FixedPostNum
   FixedTotalNum
   GaussianProb
   ProbDist
   SmallWorld
   ScaleFreeBA
   ScaleFreeBADual
   PowerLaw


Regular Connections
-------------------

.. autosummary::
   :toctree: generated/

   One2One
   All2All
   GridFour
   GridEight
   GridN
   one2one
   all2all
   grid_four
   grid_eight


