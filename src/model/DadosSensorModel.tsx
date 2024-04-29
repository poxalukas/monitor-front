import { MaquinaModel } from "./MaquinaModel";
import { SensorModel } from "./sensorModel";

export interface DadosSensorModel {
  id: number;
  sensor:SensorModel;
  timestamp: Date;
  data: number;
}
