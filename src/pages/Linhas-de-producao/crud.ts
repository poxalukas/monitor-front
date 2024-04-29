import { LinhaProducaoModel } from "@/model/LinhaProducaoModel";
import { RequestModel, ResponseModel } from "@/model/RequestModel";
import { LinhaProducaoRoutes } from "./linhaProducaoRoutes";
import api from "@/api";

export function find(request: RequestModel) {
    return api.post<ResponseModel<LinhaProducaoModel[]>>(LinhaProducaoRoutes.find, request)
  }

  export function findOne(id: number) {
    return api.get<ResponseModel>(LinhaProducaoRoutes.findById + id)
  }