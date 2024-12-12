/** @format */

import Task from "@/graphql/models/TaskModel";
import { deleteTask } from "@/graphql/resolvers/mutations/delete-task";

jest.mock("../../graphql/models/TaskModel");

describe("deleteTask", () => {
  it("should soft delete a task", async () => {
    const mockTask = { save: jest.fn(), isDeleted: false };
    Task.findById = jest.fn().mockResolvedValue(mockTask);

    const result = await deleteTask(null, { id: "123" });
    expect(Task.findById).toHaveBeenCalledWith("123");
    expect(mockTask.isDeleted).toBe(true);
    expect(mockTask.save).toHaveBeenCalled();
    expect(result).toEqual(mockTask);
  });

  it("should throw an error if task not found", async () => {
    Task.findById = jest.fn().mockResolvedValue(null);

    await expect(deleteTask(null, { id: "123" })).rejects.toThrow(
      "Task not found"
    );
  });
});
