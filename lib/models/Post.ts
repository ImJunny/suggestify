import { Schema, model, models } from "mongoose";

// Post
const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  playlist: {
    title: { type: String, required: true },
    songs: [
      {
        title: { type: String, required: true },
        artist: { type: String, required: true },
      },
    ],
  },
  createdAt: { type: Date, default: Date.now },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Use existing model if it exists, otherwise create a new one
export const Post = models.Post || model("Post", PostSchema);
