import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './providers';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
@Global()
export class SharedModule {}
