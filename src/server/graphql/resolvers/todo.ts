import { Query, Resolver } from "type-graphql";
import { Todo } from "../schemas/todo";

@Resolver()
export default class TodoResolver {
  @Query(() => [Todo])
  todos(): Todo[] {
    return [
      {
        id: "1",
        title: "Todo 1",
        description: "Description 1",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
