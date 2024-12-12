/** @format */

import Task from "../../models/TaskModel";

export const addTask = async (_: unknown, { input }: { input: any }) => {
  const newTask = new Task(input);
  return await newTask.save();
};
