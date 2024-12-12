/** @format */

import Task from "@/graphql/models/TaskModel";
import { getAllTasks } from "@/graphql/resolvers/queries/all-task-queries";

jest.mock("../../graphql/models/TaskModel");

describe("getAllTasks", () => {
  it("should return all tasks that are not deleted", async () => {
    const mockTasks = [
      { taskName: "Task 1", isDeleted: false },
      { taskName: "Task 2", isDeleted: false },
    ];
    Task.find = jest.fn().mockResolvedValue(mockTasks);

    const result = await getAllTasks();
    expect(Task.find).toHaveBeenCalledWith({ isDeleted: false });
    expect(result).toEqual(mockTasks);
  });
});
