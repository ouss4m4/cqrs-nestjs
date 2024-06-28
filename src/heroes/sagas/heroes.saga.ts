import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroLevelUpEvent } from '../events/impl/hero-level-up.event';
import { AddHeroTalentPointCommand } from '../commands/impl/add-hero-talent-point.command';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map((event) => {
        console.log(clc.redBright('Inside Saga [HeroKilledDragonEvent] '));
        return new DropAncientItemCommand(event.heroId, itemId);
      }),
    );
  };

  @Saga()
  heroLevelUp = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroLevelUpEvent),
      delay(1000),
      map((event) => {
        console.log(clc.redBright('Inside Saga [HeroLevelUpEvent]'));
        return new AddHeroTalentPointCommand(event.heroId);
      }),
    );
  };
}
