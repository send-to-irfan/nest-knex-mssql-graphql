import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nestjs-knex';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mssql',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          user: 'sa',
          password: 'root',
          database: 'test',
          connectionTimeout: 1000,
        },
        migrations: {
          directory: './src/database/migrations',
        },
      },
    }),
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
