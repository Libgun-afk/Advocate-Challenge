/** @format */

import mongoose from "mongoose";

// Task схемийг тодорхойлох
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, // Автомат timestamps (createdAt, updatedAt)
  }
);

// MongoDB Model үүсгэх
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
