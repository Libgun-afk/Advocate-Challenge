/** @format */

import Task from "@/graphql/models/TaskModel";

export const getFinishedTasksLists = async () => {
  return await Task.find({ isDeleted: true });
};
