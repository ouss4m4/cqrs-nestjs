import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroLevelUpEvent } from '../events/impl/hero-level-up.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }

  levelUp(levels: number) {
    // what kind of logic would be here? XP ?
    this.apply(new HeroLevelUpEvent(this.id, levels));
  }

  addSkillPoint() {
    // no need to do any event now, just small logic to add;
    console.log('1 skill point added');
  }
}
