import { Arg, Query, Resolver } from "type-graphql";
import { Todo } from "../schemas/todo";
import { prisma } from "@/client/prisma/prisma-client";

@Resolver()
export default class TodoResolver {
  @Query(() => [Todo])
  todos(): Promise<Todo[]> {
    return prisma.todo.findMany();
  }

  @Query(() => Todo)
  async todo(@Arg("id") id: number): Promise<Todo> {
    const todo = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });

    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return todo;
  }
}
