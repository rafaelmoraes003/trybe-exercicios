module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      return res.status(422).json({
        error: { message: err.details[0].message },
      });
    }
  
    if (err.code) {
      return res.status(err.code).json({
        error: { message: err.message },
      });
    }
  
    return res.status(500).json({
      error: {
        message: `Internal server error: ${err.message}`,
      },
    });
  };
  