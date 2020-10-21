const jwt = require('jsonwebtoken');
require("dotenv").config();
// module.exports = (req, res, next) => {
//   try {
//     // console.log(req.headers.authorization)
//     const token = req.headers.authorization.split(' ')[1];
//     // console.log(token)
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     console.log(decoded)
//     req.userData = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: 'Auth failed',
//     });
//   }
// };

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.status(401).send('Acess Denied');
  try{
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  }catch(err){
    res.status(400).send('Invalid Token')
  }
}