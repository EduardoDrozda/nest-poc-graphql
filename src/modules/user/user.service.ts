import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { DatabaseService } from '@shared/providers';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  async create(createUserInput: CreateUserInput) {
    const { name, email } = createUserInput;
    const user = await this.verifyIfUserExists(email);

    if (user) throw new BadRequestException('The user already exists.');

    return await this.databaseService.user.create({
      data: {
        name,
        email,
      },
    });
  }

  private async verifyIfUserExists(email: string): Promise<User> {
    return await this.databaseService.user.findFirst({ where: { email } });
  }

  async findAll() {
    return await this.databaseService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.findById(id);

    if (!user) throw new NotFoundException(`The user with ${id} not exists.`);

    return user;
  }

  private async findById(id: string) {
    return await this.databaseService.user.findUnique({ where: { id } });
  }

  async update({ id, name }: UpdateUserInput) {
    await this.findOne(id);

    return await this.databaseService.user.update({
      where: { id },
      data: {
        name,
      },
    });
  }
}
