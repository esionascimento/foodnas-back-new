import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    if (ctx.getHandler().name === 'login') {
      return true;
    }

    const ignoredModules = this.reflector.get<string[]>(
      'ignoredModules',
      context.getHandler(),
    );
    if (ignoredModules && ignoredModules.includes(context.getClass().name)) {
      return true;
    }
    return super.canActivate(context);
  }
}
