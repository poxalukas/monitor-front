import api from "@/api";
import { RequestModel, ResponseModel } from "@/model/RequestModel";
import { SensorModel } from "@/model/sensorModel";
import { SensorRoutes } from "./sensorRoutes";

export function find(request: RequestModel) {
    return api.post<ResponseModel<SensorModel[]>>(SensorRoutes.find, request)
  }

  export function findOne(id: number) {
    return api.get<ResponseModel<SensorModel>>(SensorRoutes.findById + id)
  }

  export function save(body: SensorModel){
    return api.post<ResponseModel<SensorModel>>(SensorRoutes.save,body)
  }
