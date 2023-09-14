import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePlaylistInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  userId: string;
}
