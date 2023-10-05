import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
); // Added timestamps for createdAt and updatedAt fields

export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
