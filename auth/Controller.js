const User = require('./User')
const bcrypt = require('bcrypt')

const signUp = async(req, res) => {
  console.log('req= ',req.body)
  if (
    (req.body.email.length <= 0) &&
    (req.body.full_name.length <= 0) &&
    (req.body.password.length <= 0) &&
    (req.body.re_password.length <= 0)
  ) {
    res.redirect('/register?error=1')
  } else if (req.body.password !== req.body.re_password) {
    res.redirect('/register?error=2')
  } else {
    const findUser = await User.findOne({ email: req.body.email })
    // console.log('User Finded ? - ',findUser)
    if (findUser) {
      res.redirect('/register?error=3')

      // console.log('findUser is = ',findUser)
      // res.send('findUser = ',findUser )
      
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          new User({
            email: req.body.email,
            full_name: req.body.full_name,
            password: hash
          }).save()
            res.redirect('/profile')
            console.log('result= ',res)
          
        })
      })
    }
  }
}

module.exports = { signUp }