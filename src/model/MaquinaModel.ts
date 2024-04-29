import { LinhaProducaoModel } from "./LinhaProducaoModel";
import { SensorModel } from "./sensorModel";

export interface MaquinaModel {
  id: number;
  name: string;
  status: boolean;
  linhaProducao: LinhaProducaoModel;
  sequencia: number;
  sensores:SensorModel[];
}
