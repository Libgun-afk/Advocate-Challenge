/** @format */

import Task from "../../graphql/models/TaskModel";
import { addTask } from "../../graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/models/TaskModel");

describe("addTask", () => {
  it("should add a new task", async () => {
    const mockInput = { taskName: "New Task", priority: 1 };
    const mockSavedTask = { ...mockInput, _id: "123" };
    Task.prototype.save = jest.fn().mockResolvedValue(mockSavedTask);

    const result = await addTask(null, { input: mockInput });
    expect(Task.prototype.save).toHaveBeenCalled();
    expect(result).toEqual(mockSavedTask);
  });

  it("should throw an error if task saving fails", async () => {
    Task.prototype.save = jest.fn().mockRejectedValue(new Error("Save error"));

    await expect(
      addTask(null, { input: { taskName: "Error Task", priority: 1 } })
    ).rejects.toThrow("Save error");
  });
});
