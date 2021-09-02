const User = require("../models/user");
exports.login = (req, res, next) => {};

exports.signup = async (req, res, next) => {
    // to do signup
   // console.log(req.body);
   try{
    const user = await User.create(req.body);
    res.status(201).json({
        message: "success",
        user,
    });
   } catch (err) {
       // TODO
   }
   
};