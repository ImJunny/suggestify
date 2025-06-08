import { Schema, model, models } from "mongoose";

// User
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

// Use existing model if it exists, otherwise create a new one
export const User = models.User || model("User", UserSchema);
