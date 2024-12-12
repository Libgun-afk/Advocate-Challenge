/** @format */

// import { gql } from "graphql-tag";

// export const typeDefs = gql`
//   type Query {
//     helloQuery: String
//   }

//   type Mutation {
//     sayHello(name: String!): String
//   }
// `;

import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    isDeleted: Boolean!
  }

  input TaskInput {
    title: String!
    description: String
  }

  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getFinishedTasksLists: [Task!]!
  }

  type Mutation {
    sayHello(name: String!): String
    addTask(input: TaskInput!): Task!
    updateTask(id: ID!, input: TaskInput!): Task!
  }
`;
