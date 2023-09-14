import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@shared/providers';
import { CreatePlaylistInput } from './dto/create-playlist.input';
import { UpdatePlaylistInput } from './dto/update-playlist.input';

@Injectable()
export class PlaylistService {
  constructor(private databaseService: DatabaseService) {}

  async create({ name, userId }: CreatePlaylistInput) {
    return await this.databaseService.playlist.create({
      data: {
        name,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return await this.databaseService.playlist.findMany({ where: { userId } });
  }

  async findOne(id: string) {
    return await this.databaseService.playlist.findFirst({
      where: { id },
      include: { user: true },
    });
  }

  async update(updatePlaylistInput: UpdatePlaylistInput) {
    const { id, name } = updatePlaylistInput;
    return await this.databaseService.playlist.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  async remove(id: string) {
    return await this.databaseService.playlist.delete({ where: { id } });
  }
}
