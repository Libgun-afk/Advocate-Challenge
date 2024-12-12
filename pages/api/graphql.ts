/** @format */

// import { buildSubgraphSchema } from "@apollo/subgraph";
// import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
// import { resolvers } from "../../graphql/resolvers";
// import { ApolloServer } from "apollo-server-cloud-functions";
// import { connectMongoose } from "@/mongoose/mongoose-connection";
// import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";
// import { typeDefs } from "@/graphql/schemas";

// connectMongoose();

// const server = new ApolloServer({
//   schema: buildSubgraphSchema({
//     typeDefs,
//     resolvers: resolvers as unknown as GraphQLResolverMap<unknown>,
//   }),
//   introspection: true,
//   csrfPrevention: true,
//   cache: new InMemoryLRUCache(),
//   context: ({ req, res }: { req: Request; res: Response }) => ({
//     headers: req.headers,
//     req,
//     res,
//   }),
// });

// export const config = { api: { bodyParser: false, externalResolver: true } };

// export default server.createHandler();
// server.ts
import { ApolloServer } from "apollo-server-cloud-functions";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { connectMongoose } from "@/mongoose/mongoose-connection";
import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";
import { typeDefs } from "@/graphql/schemas";
import { resolvers } from "@/graphql/resolvers";

connectMongoose();

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: resolvers as unknown as GraphQLResolverMap<unknown>,
  }),
  introspection: true, // GraphQL introspection
  csrfPrevention: true, // CSRF хамгаалалт
  cache: new InMemoryLRUCache(),
  context: ({ req, res }: { req: Request; res: Response }) => ({
    headers: req.headers,
    req,
    res,
  }),
});

export const config = { api: { bodyParser: false, externalResolver: true } };

export default server.createHandler();
