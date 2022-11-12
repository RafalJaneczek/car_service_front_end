import {EngineType} from "../enums/motorcycle/engine-type";
import {BodyType} from "../enums/motorcycle/body-type";
import {Vehicle} from "./vehicle";

export interface Motorcycle extends Vehicle {
  engineType: EngineType;
  type: BodyType;
}
