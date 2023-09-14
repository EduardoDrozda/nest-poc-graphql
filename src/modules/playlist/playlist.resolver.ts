import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePlaylistInput } from './dto/create-playlist.input';
import { UpdatePlaylistInput } from './dto/update-playlist.input';
import { Playlist } from './entities/playlist.entity';
import { PlaylistService } from './playlist.service';

@Resolver(() => Playlist)
export class PlaylistResolver {
  constructor(private readonly playlistService: PlaylistService) {}

  @Mutation(() => Playlist)
  createPlaylist(
    @Args('createPlaylistInput') createPlaylistInput: CreatePlaylistInput,
  ) {
    return this.playlistService.create(createPlaylistInput);
  }

  @Query(() => [Playlist], { name: 'playlists' })
  findAll(@Args('userId', { type: () => ID }) userId: string) {
    return this.playlistService.findAll(userId);
  }

  @Query(() => Playlist, { name: 'playlist' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.playlistService.findOne(id);
  }

  @Mutation(() => Playlist)
  updatePlaylist(
    @Args('updatePlaylistInput') updatePlaylistInput: UpdatePlaylistInput,
  ) {
    return this.playlistService.update(updatePlaylistInput);
  }

  @Mutation(() => Playlist)
  removePlaylist(@Args('id', { type: () => ID }) id: string) {
    return this.playlistService.remove(id);
  }
}
