import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';

import { GetHeroesQuery } from '../impl';
import { HeroRepository } from 'src/heroes/repository/hero.repository';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroesQuery) {
    console.log(clc.yellowBright('Async GetHeroesQuery...'));
    console.log(query);
    return this.repository.findAll();
  }
}
