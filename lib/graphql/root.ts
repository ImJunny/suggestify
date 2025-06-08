import { User } from "@/lib/models/User";
import { connectDB } from "@/lib/mongoose";

// GQL resolver; used by schema.ts
export const root = {
  users: async () => {
    await connectDB();
    return await User.find().lean();
  },
  userByUsername: async ({ username }: { username: string }) => {
    await connectDB();
    return await User.findOne({ username }).lean();
  },
  createUser: async ({
    username,
    email,
    age,
  }: {
    username: string;
    email: string;
    age?: number;
  }) => {
    await connectDB();
    const user = new User({ username, email, age });
    await user.save();
    return user.toObject();
  },
};
