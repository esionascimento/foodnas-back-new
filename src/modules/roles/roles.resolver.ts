import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { CreateOneRolesInput } from './dto/inputs/create-roles.input';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from '@/entities/roles.entity';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}

  @Mutation(() => Roles)
  @UseGuards(JwtAuthGuard)
  async CreateRoles(
    @Args('input') input: CreateOneRolesInput,
    @Context() context,
  ): Promise<Roles> {
    return this.rolesService.create(input, context.req.user);
  }
}
