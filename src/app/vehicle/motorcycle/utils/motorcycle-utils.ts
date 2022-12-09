export class MotorcycleUtils {
  static readonly bodyType: Map<string, string> = new Map([
    ['SPORT', 'Sport'],
    ['CRUISER', 'Cruiser'],
    ['CROSS', 'Cross'],
    ['CHOPPER', 'Chopper'],
    ['SCOOTER', 'Scooter']
  ]);

  static readonly engineType: Map<string, string> = new Map([
    ['GAS', 'Gas'],
    ['ELECTRIC', 'Electric']
  ]);
}
