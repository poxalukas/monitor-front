import { MaquinaModel } from "./MaquinaModel";


export interface LinhaProducaoModel{
    id: number;
    name: string;
    status: boolean;
    maquinas: MaquinaModel[];
}

