import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { UserResolver } from '@graphql/resolver/user.resolver';
import { dataSourceOptions } from './database/ormconfig';
import { AuthModule } from './modules/auth/auth.module';
import { FornecedoresModule } from './modules/fornecedores/fornecedores.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UsuariosModule,
    FornecedoresModule,
  ],
  controllers: [],
  providers: [UserResolver],
})
export class AppModule {}
