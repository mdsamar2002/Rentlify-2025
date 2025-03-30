import mongoose, { Schema } from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
      index: true,
    },
    description: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
  },
  { timestamps }
);

export default Note = mongoose.model("Note", noteSchema);
