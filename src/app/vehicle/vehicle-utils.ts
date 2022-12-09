export class VehicleUtils {
  static readonly condition: Map<string, string> = new Map([
    ['NEW', 'New'],
    ['USED', 'Used']
  ]);

  static readonly isDamaged: Map<boolean, string> = new Map([
    [true, 'Yes'],
    [false, 'No']
  ]);
}
