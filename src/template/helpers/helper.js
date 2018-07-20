const helper = {
  if: function (conditional, options) {
    if (conditional) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
};

module.exports = helper;
