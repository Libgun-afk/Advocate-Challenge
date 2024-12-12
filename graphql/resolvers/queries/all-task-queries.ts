/** @format */

import Task from "../../models/TaskModel";

export const getAllTasks = async () => {
  return await Task.find({ isDeleted: false });
};
