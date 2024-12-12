/** @format */

import { addTask, updateTask } from "./mutations/task-mutations";
import { getAllTasks, getFinishedTasksLists } from "./queries/task-queries";

// import { sayHello } from "./mutations/say-hello";
// import { helloQuery } from "./queries/hello-query";

// export const resolvers = {
//   Query: {
//     helloQuery,
//   },
//   Mutation: {
//     sayHello,
//   },
// };
// import { getAllTasks, getFinishedTasksLists } from "./task-resolvers";
// import { addTask, updateTask } from "./task-resolvers";

export const resolvers = {
  Query: {
    getAllTasks,
    getFinishedTasksLists,
  },
  Mutation: {
    addTask,
    updateTask,
  },
};
