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
    userEmail: {
      type: String, // Assuming userEmail is a string, adjust the type accordingly
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "ASSIGNED", "COMPLETED"], // Allowed status values
      default: "OPEN", // Default status value if not provided
    },
  },
  { timestamps: true }
);

export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
