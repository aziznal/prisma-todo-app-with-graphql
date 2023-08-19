import "reflect-metadata";

import TodoResolver from "@/server/graphql/resolvers/todo";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers: [TodoResolver],
});

const server = new ApolloServer({ schema });

const startServer = server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;

  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}
