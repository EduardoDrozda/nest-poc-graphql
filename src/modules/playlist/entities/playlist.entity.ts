import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Playlist {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;
}
