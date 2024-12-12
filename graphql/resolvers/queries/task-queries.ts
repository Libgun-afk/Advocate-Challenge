/** @format */

import Task from "../../models/Task";

export const getAllTasks = async () => {
  return await Task.find({ isDeleted: false });
};

export const getFinishedTasksLists = async () => {
  return await Task.find({ isDeleted: true });
};
