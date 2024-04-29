import { LinhaProducaoModel } from "@/model/LinhaProducaoModel";
import { RequestModel, ResponseModel } from "@/model/RequestModel";
import { LinhaProducaoRoutes, MaquinaRoutes } from "./maquinaRoutes";
import api from "@/api";
import { MaquinaModel } from "@/model/MaquinaModel";

export function find(request: RequestModel) {
    return api.post<ResponseModel<MaquinaModel[]>>(MaquinaRoutes.find, request)
  }

  export function findOne(id: number) {
    return api.get<ResponseModel>(MaquinaRoutes.findById + id)
  }