/** @format */

import Task from "@/graphql/models/TaskModel";
import { getFinishedTasksLists } from "@/graphql/resolvers/queries/finished-tasks";

jest.mock("../../graphql/models/TaskModel");

describe("getFinishedTasksLists", () => {
  it("should return all tasks that are deleted", async () => {
    const mockTasks = [
      { taskName: "Finished Task 1", isDeleted: true },
      { taskName: "Finished Task 2", isDeleted: true },
    ];
    Task.find = jest.fn().mockResolvedValue(mockTasks);

    const result = await getFinishedTasksLists();
    expect(Task.find).toHaveBeenCalledWith({ isDeleted: true });
    expect(result).toEqual(mockTasks);
  });
});
