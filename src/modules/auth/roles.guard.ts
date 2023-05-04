import { Usuarios } from '@/entities/usuarios.entity';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }
    const ctx = GqlExecutionContext.create(context);

    const usuarioJwt = ctx.getContext().req.user;

    if (!usuarioJwt) throw new BadRequestException('Usuário não encontrado');

    const userRoles = usuarioJwt?.roles?.map((role) => role.nome);
    if (!userRoles?.length)
      throw new BadRequestException('Usuário não tem permissão');

    return requiredRoles.some((role) => userRoles?.includes(role));
  }
}
