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
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { PermissaoModule } from './modules/permissao/permissao.module';
import { RolesModule } from './modules/roles/roles.module';
import { GqlAuthGuard } from './modules/auth/gql-auth.guard';

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
    PermissaoModule,
    RolesModule,
  ],
  controllers: [],
  // providers: [UserResolver],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
