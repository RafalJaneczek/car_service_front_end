export class VehicleUtils {

  private static readonly MIN_PRODUCTION_YEAR: number = 1900;

  public static getProductionYears(): number[] {
    let productionYears: number[] = [];

    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= this.MIN_PRODUCTION_YEAR; y--) {
      productionYears.push(y);
    }

    return productionYears;
  }

}
