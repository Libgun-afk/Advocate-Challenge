/** @format */

import Task from "../../graphql/models/TaskModel";
import { updateTask } from "../../graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/models/TaskModel");

describe("updateTask", () => {
  it("should update an existing task", async () => {
    const mockTask = { save: jest.fn(), taskName: "Old Task" };
    Task.findById = jest.fn().mockResolvedValue(mockTask);

    const result = await updateTask(null, {
      id: "123",
      input: { taskName: "Updated Task" },
    });

    expect(Task.findById).toHaveBeenCalledWith("123");
    expect(mockTask.taskName).toBe("Updated Task");
    expect(mockTask.save).toHaveBeenCalled();
    expect(result).toEqual(mockTask);
  });

  it("should throw an error if task is not found", async () => {
    Task.findById = jest.fn().mockResolvedValue(null);

    await expect(
      updateTask(null, { id: "123", input: { taskName: "Nonexistent Task" } })
    ).rejects.toThrow("Task not found");
  });
});
