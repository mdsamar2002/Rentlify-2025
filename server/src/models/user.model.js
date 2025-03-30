import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowerCase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    avatar: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps:true}
);

// userSchema.pre("save", async (next) => {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.isPasswordCorrect(async (password) => {
//   return bcrypt.compare(password, this.password);
// });

// userSchema.methods.generateAccessToken = () => {
//   return jwt.sign(
//     {
//       _id: this._id,
//       username: this.username,
//       password: this.password,
//     },
//     process.env.ACCESS_TOKEN,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
//     }
//   );
// };

// userSchema.methods.generateRefreshToken = () => {
//   return jwt.sign(
//     {
//       _id: this._id,
//       username: this.username,
//       password: this.password,
//     },
//     process.env.REFRESH_TOKEN,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//     }
//   );
// };
const User = mongoose.model("User", userSchema);
export default User
