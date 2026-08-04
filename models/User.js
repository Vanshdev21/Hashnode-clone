import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    bio: { type: String, maxlength: 200, default: "" },
    avatarUrl: { type: String, default: "" },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const hashedPassword = await bcrypt.hash(this.password, 10);

  this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);

export default User;
