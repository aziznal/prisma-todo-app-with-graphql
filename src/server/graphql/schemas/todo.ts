import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Todo {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;

  @Field(() => Boolean)
  completed!: boolean;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
