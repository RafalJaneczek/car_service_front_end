export class MotorcycleFixture {
  static readonly types: Map<string, string> = new Map([
    ['SPORT', 'Sport'],
    ['CRUISER', 'Cruiser'],
    ['CROSS', 'Cross'],
    ['CHOPPER', 'Chopper'],
    ['SCOOTER', 'Scooter']
  ]);

  static readonly engineTypes: Map<string, string> = new Map([
    ['GAS', 'Gas'],
    ['ELECTRIC', 'Electric']
  ]);
}
