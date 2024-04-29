import { MaquinaModel } from "./MaquinaModel";

export interface SensorModel {
  id: number;
  name: string;
  status: boolean;
  maquina: number;
  setpoint: number;
}
