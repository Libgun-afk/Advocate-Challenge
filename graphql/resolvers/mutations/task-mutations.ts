/** @format */

import Task from "../../models/Task";

export const addTask = async (_: unknown, { input }: { input: any }) => {
  const newTask = new Task(input);
  return await newTask.save();
};

export const updateTask = async (
  _: unknown,
  { id, input }: { id: string; input: any }
) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task not found");
  Object.assign(task, input);
  return await task.save();
};
