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

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(updatePlaylistInput: UpdatePlaylistInput) {
    const { id, name } = updatePlaylistInput;
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
