/* eslint-disable @typescript-eslint/no-unused-vars */
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';
import * as clc from 'cli-color';

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemEventHandler
  implements IEventHandler<HeroFoundItemEvent>
{
  handle(event: HeroFoundItemEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
  }
}
