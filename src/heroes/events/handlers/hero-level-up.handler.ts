/* eslint-disable @typescript-eslint/no-unused-vars */
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroLevelUpEvent } from '../impl/hero-level-up.event';
import * as clc from 'cli-color';

@EventsHandler(HeroLevelUpEvent)
export class HeroLevelUpHandler implements IEventHandler<HeroLevelUpEvent> {
  handle(event: HeroLevelUpEvent) {
    console.log(clc.greenBright('Hero Level Up Yoohoo...'));
  }
}
