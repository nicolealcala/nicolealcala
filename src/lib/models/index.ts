import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    note: { type: [String], required: true },
    noteFor: { type: String, required: true },
    code: { type: String, required: true, unique: false },
    writtenOn: { type: String },
  },
  { timestamps: true }
);

export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
