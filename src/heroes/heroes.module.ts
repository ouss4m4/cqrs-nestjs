import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroRepository } from './repository/hero.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { HeroesGameSagas } from './sagas/heroes.saga';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesModule {}
