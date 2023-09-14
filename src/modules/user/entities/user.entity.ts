import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Playlist } from 'src/modules/playlist/entities/playlist.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [Playlist])
  playlists: [Playlist];
}
