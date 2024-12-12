/** @format */

import Task from "@/graphql/models/TaskModel";

export const deleteTask = async (_: unknown, { id }: { id: string }) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task not found");

  // Task-ийг устгах эсвэл soft delete хийх
  task.isDeleted = true; // Soft delete хийхийг хүсэж байгаа бол энэ шугамыг ашиглаарай
  return await task.save();

  // Хэрэв бүр мөсөн устгах бол доорх шугамыг ашиглана уу
  // return await Task.findByIdAndDelete(id);
};
