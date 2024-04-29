import { SensorModel } from "@/model/sensorModel";
import { SensorRoutes } from "@/pages/sensor/sensorRoutes";
import {toast} from "react-toastify";

const BUILD_API_URL =  import.meta.env.VITE_REACT_API_URL

export async function salvarSensor(data:any) {

    return fetch( BUILD_API_URL+SensorRoutes.save, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(err => {
        console.error('Erro ao salvar:', err);
        toast.error('Erro ao salvar');
    });
  }

  export async function editarSensor(data:any) {

    return fetch( BUILD_API_URL+SensorRoutes.update, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(err => {
        console.error('Erro ao salvar:', err);
        toast.error('Erro ao salvar');
    });
  }
  export async function editarSensorCsv(data:any) {

    return fetch( BUILD_API_URL+SensorRoutes.updateCsv, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(err => {
        console.error('Erro ao salvar:', err);
        toast.error('Erro ao salvar');
    });
  }

  export async function visualizarDados(id: number){
    return fetch( BUILD_API_URL+SensorRoutes.visualizar+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
    })
    .then(data => data.json())
    .catch(err => {
        console.error('Erro ao salvar:', err);
        toast.error('Erro ao salvar');
    });
  }