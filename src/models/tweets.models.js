import mongoose, { Schema } from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    content: {
      type: String,
      requird: true,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
