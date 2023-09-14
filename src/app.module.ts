import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: join(
          process.cwd(),
          configService.get('SCHEMA_PATH', 'src/schema/schema.gql'),
        ),
        playground: configService.get('SCHEMA_PLAYGROUND', false) as boolean,
        sortSchema: configService.get('SCHEMA_SORT', false) as boolean,
      }),
    }),
    SharedModule,
    UserModule,
    PlaylistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
