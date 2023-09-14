import { Field, ID, InputType, PickType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PickType(CreateUserInput, ['name']) {
  @Field(() => ID)
  id: string;
}
