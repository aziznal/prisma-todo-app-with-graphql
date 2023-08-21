import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  todo: Todo;
  todos: Array<Todo>;
};


export type QueryTodoArgs = {
  id: Scalars['Float']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean }> };


export const GetTodosDocument = `
    query getTodos {
  todos {
    id
    title
    completed
  }
}
    `;
export const useGetTodosQuery = <
      TData = GetTodosQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetTodosQueryVariables,
      options?: UseQueryOptions<GetTodosQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTodosQuery, TError, TData>(
      variables === undefined ? ['getTodos'] : ['getTodos', variables],
      fetcher<GetTodosQuery, GetTodosQueryVariables>(client, GetTodosDocument, variables, headers),
      options
    );