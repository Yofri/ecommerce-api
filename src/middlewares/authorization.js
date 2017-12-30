import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = req.headers.token
  if (!token) {
    res.status(401).send({msg: 'Unauthenticated'})
  } else {
    const user = jwt.verify(token, process.env.JWT_KEY)
    if (user.role === 'user') {
      res.status(401).send({msg: 'Unauthorized'})
    } else {
      next()
    }
  }
}