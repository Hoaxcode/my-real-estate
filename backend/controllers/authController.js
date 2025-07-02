const signup = (req, res) => {
  res.json({
    message: req.body,
  });
};

module.exports = signup;
