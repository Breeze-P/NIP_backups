``brainpy.math`` module
=======================

.. contents::
   :local:
   :depth: 1

Basis for Object-oriented Transformations
-----------------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   BrainPyObject
   FunAsObject
   dyn_seq
   dyn_dict
   Variable
   Parameter
   TrainVar
   Partial


Object-oriented Transformations
-------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   grad
   vector_grad
   jacobian
   jacrev
   jacfwd
   hessian
   make_loop
   make_while
   make_cond
   cond
   ifelse
   for_loop
   while_loop
   to_object
   to_dynsys
   function
   jit
   ObjectTransform


Brain Dynamics Dedicated Operators
----------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   pre2post_sum
   pre2post_prod
   pre2post_max
   pre2post_min
   pre2post_mean
   pre2post_event_sum
   pre2post_coo_event_sum
   pre2post_event_prod
   pre2syn
   syn2post_sum
   syn2post
   syn2post_prod
   syn2post_max
   syn2post_min
   syn2post_mean
   syn2post_softmax
   sparse_matmul
   csr_matvec
   event_csr_matvec
   XLACustomOp


Activation Functions
--------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   celu
   elu
   gelu
   glu
   hard_tanh
   hard_sigmoid
   hard_silu
   hard_swish
   leaky_relu
   log_sigmoid
   log_softmax
   one_hot
   normalize
   relu
   relu6
   sigmoid
   soft_sign
   softmax
   softplus
   silu
   swish
   selu
   identity


Delay Variables
---------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   TimeDelay
   LengthDelay
   NeuTimeDelay
   NeuLenDelay
   DelayVariable
   ROTATE_UPDATE
   CONCAT_UPDATE


Environment Settings
--------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   set_float
   get_float
   set_int
   get_int
   set_bool
   get_bool
   set_complex
   get_complex
   set_dt
   get_dt
   set_mode
   get_mode
   set_environment
   enable_x64
   disable_x64
   set_platform
   get_platform
   set_host_device_count
   clear_buffer_memory
   enable_gpu_memory_preallocation
   disable_gpu_memory_preallocation
   ditype
   dftype
   environment
   batching_environment
   training_environment


Computing Modes
---------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   Mode
   NonBatchingMode
   BatchingMode
   TrainingMode
   nonbatching_mode
   batching_mode
   training_mode


Array Interoperability
----------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   as_device_array
   as_jax
   as_ndarray
   as_numpy
   as_variable


Array Operators with NumPy Syntax
---------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   fill_diagonal
   empty
   empty_like
   ones
   ones_like
   zeros
   zeros_like
   array
   asarray
   arange
   linspace
   logspace
   full
   full_like
   eye
   identity
   diag
   tri
   tril
   triu
   real
   imag
   conj
   conjugate
   ndim
   isreal
   isscalar
   add
   reciprocal
   negative
   positive
   multiply
   divide
   power
   subtract
   true_divide
   floor_divide
   float_power
   fmod
   mod
   modf
   divmod
   remainder
   abs
   exp
   exp2
   expm1
   log
   log10
   log1p
   log2
   logaddexp
   logaddexp2
   lcm
   gcd
   arccos
   arccosh
   arcsin
   arcsinh
   arctan
   arctan2
   arctanh
   cos
   cosh
   sin
   sinc
   sinh
   tan
   tanh
   deg2rad
   hypot
   rad2deg
   degrees
   radians
   round
   around
   round_
   rint
   floor
   ceil
   trunc
   fix
   prod
   sum
   diff
   median
   nancumprod
   nancumsum
   nanprod
   nansum
   cumprod
   cumsum
   ediff1d
   cross
   trapz
   isfinite
   isinf
   isnan
   signbit
   copysign
   nextafter
   ldexp
   frexp
   convolve
   sqrt
   cbrt
   square
   absolute
   fabs
   sign
   heaviside
   maximum
   minimum
   fmax
   fmin
   interp
   clip
   angle
   bitwise_and
   bitwise_not
   bitwise_or
   bitwise_xor
   invert
   left_shift
   right_shift
   equal
   not_equal
   greater
   greater_equal
   less
   less_equal
   array_equal
   isclose
   allclose
   logical_and
   logical_not
   logical_or
   logical_xor
   all
   any
   alltrue
   sometrue
   shape
   size
   reshape
   ravel
   moveaxis
   transpose
   swapaxes
   concatenate
   stack
   vstack
   hstack
   dstack
   column_stack
   split
   dsplit
   hsplit
   vsplit
   tile
   repeat
   unique
   append
   flip
   fliplr
   flipud
   roll
   atleast_1d
   atleast_2d
   atleast_3d
   expand_dims
   squeeze
   sort
   argsort
   argmax
   argmin
   argwhere
   nonzero
   flatnonzero
   where
   searchsorted
   extract
   count_nonzero
   max
   min
   amax
   amin
   array_split
   meshgrid
   vander
   tril_indices
   tril_indices_from
   triu_indices
   triu_indices_from
   take
   select
   nanmin
   nanmax
   ptp
   percentile
   nanpercentile
   quantile
   nanquantile
   average
   mean
   std
   var
   nanmedian
   nanmean
   nanstd
   nanvar
   corrcoef
   correlate
   cov
   histogram
   bincount
   digitize
   bartlett
   blackman
   hamming
   hanning
   kaiser
   dot
   vdot
   inner
   outer
   kron
   matmul
   trace
   product
   row_stack
   apply_over_axes
   apply_along_axis
   array_equiv
   array_repr
   array_str
   block
   broadcast_arrays
   broadcast_shapes
   broadcast_to
   compress
   cumproduct
   diag_indices
   diag_indices_from
   diagflat
   diagonal
   einsum
   einsum_path
   geomspace
   gradient
   histogram2d
   histogram_bin_edges
   histogramdd
   i0
   in1d
   indices
   insert
   intersect1d
   iscomplex
   isin
   ix_
   lexsort
   load
   save
   savez
   mask_indices
   msort
   nan_to_num
   nanargmax
   setdiff1d
   nanargmin
   pad
   poly
   polyadd
   polyder
   polyfit
   polyint
   polymul
   polysub
   polyval
   resize
   rollaxis
   roots
   rot90
   setxor1d
   tensordot
   trim_zeros
   union1d
   unravel_index
   unwrap
   take_along_axis
   can_cast
   choose
   copy
   frombuffer
   fromfile
   fromfunction
   fromiter
   fromstring
   get_printoptions
   iscomplexobj
   isneginf
   isposinf
   isrealobj
   issubdtype
   issubsctype
   iterable
   packbits
   piecewise
   printoptions
   set_printoptions
   promote_types
   ravel_multi_index
   result_type
   sort_complex
   unpackbits
   delete
   add_newdoc
   array2string
   asanyarray
   ascontiguousarray
   asfarray
   asscalar
   common_type
   disp
   genfromtxt
   loadtxt
   info
   issubclass_
   place
   polydiv
   put
   putmask
   safe_eval
   savetxt
   savez_compressed
   show_config
   typename
   copyto
   matrix
   asmatrix
   mat
   dtype
   finfo
   iinfo
   e
   pi
   inf
   add_docstring
   add_newdoc_ufunc


Array Operators with PyTorch Syntax
-----------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   flatten
   cat
   unsqueeze
   abs
   absolute
   acos
   arccos
   acosh
   arccosh
   add
   addcdiv
   addcmul
   angle
   asin
   arcsin
   asinh
   atan
   arctan
   atan2
   atanh
   Tensor


Array Operators with TensorFlow Syntax
--------------------------------------

.. currentmodule:: brainpy.math 
.. automodule:: brainpy.math 

.. autosummary::
   :toctree: generated/

   concat
   reduce_sum
   reduce_max
   reduce_min
   reduce_mean
   reduce_all
   reduce_any
   reduce_logsumexp
   reduce_prod
   reduce_std
   reduce_variance
   reduce_euclidean_norm
   unsorted_segment_sqrt_n
   segment_mean
   unsorted_segment_sum
   unsorted_segment_prod
   unsorted_segment_max
   unsorted_segment_min
   unsorted_segment_mean
   segment_sum
   segment_prod
   segment_max
   segment_min
   clip_by_value
   cast


``brainpy.math.surrogate`` module: Surrogate Gradient Functions
---------------------------------------------------------------

.. currentmodule:: brainpy.math.surrogate 
.. automodule:: brainpy.math.surrogate 

.. autosummary::
   :toctree: generated/

   sigmoid
   piecewise_quadratic
   piecewise_exp
   soft_sign
   arctan
   nonzero_sign_log
   erf
   piecewise_leaky_relu
   squarewave_fourier_series
   s2nn
   q_pseudo_spike
   leaky_relu
   log_tailed_relu
   relu_grad
   gaussian_grad
   inv_square_grad
   multi_gaussian_grad
   slayer_grad
   inv_square_grad2
   relu_grad2


``brainpy.math.random`` module: Random Number Generations
---------------------------------------------------------

.. currentmodule:: brainpy.math.random 
.. automodule:: brainpy.math.random 

.. autosummary::
   :toctree: generated/

   seed
   split_key
   default_rng
   rand
   randint
   random_integers
   randn
   random
   random_sample
   ranf
   sample
   choice
   permutation
   shuffle
   beta
   exponential
   gamma
   gumbel
   laplace
   logistic
   normal
   pareto
   poisson
   standard_cauchy
   standard_exponential
   standard_gamma
   standard_normal
   standard_t
   uniform
   truncated_normal
   bernoulli
   lognormal
   binomial
   chisquare
   dirichlet
   geometric
   f
   hypergeometric
   logseries
   multinomial
   multivariate_normal
   negative_binomial
   noncentral_chisquare
   noncentral_f
   power
   rayleigh
   triangular
   vonmises
   wald
   weibull
   weibull_min
   zipf
   maxwell
   t
   orthogonal
   loggamma
   categorical
   rand_like
   randint_like
   randn_like
   RandomState
   Generator
   DEFAULT


``brainpy.math.linalg`` module: Linear algebra
----------------------------------------------

.. currentmodule:: brainpy.math.linalg 
.. automodule:: brainpy.math.linalg 

.. autosummary::
   :toctree: generated/

   cholesky
   cond
   det
   eig
   eigh
   eigvals
   eigvalsh
   inv
   svd
   lstsq
   matrix_power
   matrix_rank
   norm
   pinv
   qr
   solve
   slogdet
   tensorinv
   tensorsolve
   multi_dot


``brainpy.math.fft`` module: Discrete Fourier Transform
-------------------------------------------------------

.. currentmodule:: brainpy.math.fft 
.. automodule:: brainpy.math.fft 

.. autosummary::
   :toctree: generated/

   fft
   fft2
   fftfreq
   fftn
   fftshift
   hfft
   ifft
   ifft2
   ifftn
   ifftshift
   ihfft
   irfft
   irfft2
   irfftn
   rfft
   rfft2
   rfftfreq
   rfftn


