from __future__ import absolute_import, division, print_function

import torch
from torch.distributions import constraints

from pyro.distributions.distribution import Distribution
from pyro.distributions.util import copy_docs_from


@copy_docs_from(Distribution)
class TorchDistribution(Distribution):
    """
    Compatibility wrapper around
    `torch.distributions.Distribution <http://pytorch.org/docs/master/_modules/torch/distributions.html#Distribution>`_
    """

    def __init__(self, torch_dist, extra_event_dims=0):
        super(TorchDistribution, self).__init__()
        self.torch_dist = torch_dist
        self.extra_event_dims = extra_event_dims

    # TODO define .reparameterized, .enumerable properties once RandomPrimitive is gone

    @constraints.dependent_property
    def params(self):
        return self.torch_dist.params

    @constraints.dependent_property
    def support(self):
        return self.torch_dist.support

    @property
    def batch_shape(self):
        if self.extra_event_dims == 0:
            return self.torch_dist.batch_shape
        batch_dims = len(self.torch_dist.batch_shape) - self.extra_event_dims
        return self.torch_dist.batch_shape[:batch_dims]

    @property
    def event_shape(self):
        if self.extra_event_dims == 0:
            return self.torch_dist.event_shape
        batch_dims = len(self.torch_dist.batch_shape) - self.extra_event_dims
        shape = self.torch_dist.batch_shape + self.torch_dist.event_shape
        return shape[batch_dims:]

    def sample(self, sample_shape=torch.Size()):
        if self.reparameterized:
            return self.torch_dist.rsample(sample_shape)
        else:
            return self.torch_dist.sample(sample_shape)

    def log_prob(self, x):
        log_prob = self.torch_dist.log_prob(x)
        for _ in range(self.extra_event_dims):
            log_prob = log_prob.sum(-1)
        return log_prob

    def enumerate_support(self):
        return self.torch_dist.enumerate_support()

    def analytic_mean(self):
        return self.torch_dist.mean

    def analytic_var(self):
        return self.torch_dist.variance

    def _validate_log_prob_arg(self, value):
        self.torch_dist._validate_log_prob_arg(value)
