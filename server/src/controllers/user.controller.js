import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "please enter your username or mail or password",
        sucess: false,
      });
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({
        message: "user already exist",
        sucess: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username,email,password:hashPassword})
     await newUser.save();
    console.log("newUser", newUser);

    return res.status(201).json({
      message: "user signUp successfully",
      sucess: true,
    });
  } catch (error) {
    console.log(error, "signup error");
  }
};

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).json({
        message: "please enter your mail or password",
        sucess: false,
      });
    }
    const person = await User.findOne({email});
    if (!person) {
      return res.status(400).json({
        message: "user not exist",
        sucess: false,
      });
    }
    const comparePass = await bcrypt.compare(password, person.password);
    if (!comparePass) {
      return res.status(400).json({
        message: "incorrect password",
        sucess: false,
      });
    }

   
    const token = jwt.sign({id:person._id},process.env.ACCESS_TOKEN);
    return res.cookie("login",token, { maxAge: 10, httpOnly: true }).json({
      message: "login successfully",
      sucess: true,
    });
  } catch (error) {
    console.log(error, "login error");
  }
};

const logOut = async (_,res) => {
  return res.clearCookie("login").json({
    message: "signOut successfullly",
    sucess: true,
  });
};

export { signUp, logIn, logOut };
