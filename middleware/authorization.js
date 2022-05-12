const authorization = (req, res, next) => {
  console.log('AUTHORIZATION MIDDLEWARE HANDLING...')
  next();
}

module.exports = authorization;