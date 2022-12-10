export class CarFixture {
  static readonly bodyTypes: Map<string, string> = new Map([
    ['SEDAN', 'Sedan'],
    ['HATCHBACK', 'Hatchback'],
    ['COUPE', 'Coupe'],
    ['CABRIOLET', 'Cabriolet'],
    ['COUPE_CABRIO', 'Coupe-cabrio'],
    ['KOMBI', 'Kombi'],
    ['PICKUP', 'Pickup'],
    ['VAN', 'Van']
  ]);

  static readonly engineTypes: Map<string, string> = new Map([
    ['GAS', 'Gas'],
    ['GASOLINE_WITH_GAS', 'Gasoline with gas'],
    ['ELECTRIC', 'Electric'],
    ['HYBRID', 'Hybrid'],
    ['DIESEL', 'Diesel']
  ]);

  static readonly numberOfSeatsArray: number[] = [2, 3, 5, 7];
}
