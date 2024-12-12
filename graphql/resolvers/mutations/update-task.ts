/** @format */

import Task from "@/graphql/models/TaskModel";

export const updateTask = async (
  _: unknown,
  { id, input }: { id: string; input: any }
) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task not found");
  Object.assign(task, input);
  return await task.save();
};
