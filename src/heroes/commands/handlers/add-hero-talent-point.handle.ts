/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddHeroTalentPointCommand } from '../impl/add-hero-talent-point.command';
import { HeroRepository } from 'src/heroes/repository/hero.repository';
import * as clc from 'cli-color';

@CommandHandler(AddHeroTalentPointCommand)
export class AddHeroTalentPointHandler
  implements ICommandHandler<AddHeroTalentPointCommand>
{
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddHeroTalentPointCommand): Promise<any> {
    console.log(clc.greenBright('Add 1 skill point to hero...'));

    const { heroId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(parseInt(heroId)),
    );
    hero.addSkillPoint();
    // save
    hero.commit();
  }
}
