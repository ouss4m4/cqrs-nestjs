import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hero } from './models/hero.model';
import { GetHeroesQuery } from './queries/impl';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';

@Controller('heroes')
export class HeroesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
