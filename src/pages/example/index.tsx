import { useGetTodosQuery } from "@/client/generated/graphql";
import { graphqlClient } from "@/client/graphql/graphql-client";

export default function Example() {
  const todoQuery = useGetTodosQuery(graphqlClient);

  if (todoQuery.isLoading) {
    return <>Loading...</>;
  }

  if (todoQuery.isError) {
    console.log(todoQuery.error);
    return <>Error</>;
  }

  return <>Hello World</>;
}
