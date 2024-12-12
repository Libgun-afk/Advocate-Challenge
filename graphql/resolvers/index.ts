/** @format */

import { addTask } from "./mutations/add-task";
import { deleteTask } from "./mutations/delete-task";
import { sayHello } from "./mutations/say-hello";

import { updateTask } from "./mutations/update-task";
import { getAllTasks } from "./queries/all-task-queries";
import { getFinishedTasksLists } from "./queries/finished-tasks";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getFinishedTasksLists,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
    deleteTask,
  },
};
