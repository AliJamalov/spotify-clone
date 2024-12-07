import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      // clerk userId
      type: String,
      required: true,
    },
    receiverId: {
      // clerk userId
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
