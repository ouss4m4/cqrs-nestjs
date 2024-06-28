export class HeroLevelUpEvent {
  constructor(
    public readonly heroId: string,
    public readonly levels: number,
  ) {}
}
