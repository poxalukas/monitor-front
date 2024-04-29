import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RequestModel } from "@/model/RequestModel";
import { SensorModel } from "@/model/sensorModel";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { find as maquinaFind } from "@/pages/maquina/crud";
import { Link } from "react-router-dom";

const request: RequestModel = {
    pageSize: 1000,
    pageNumber: 1,
    sortOrder: 'asc',
    sortField: 'id',
    filter: {},
}

function Sensor() {
    const [sensor, setSensor] = useState<SensorModel[]>([])

    const renderAcoes = (rowData: SensorModel) => {
        return (
            <div className="btn-group" role="group">
                <Button className="btn btn-primary mr-2">
                    <Link to={`/sensor/editar?id=${rowData.id}&action=edit`} className="text-white">Editar</Link>
                </Button>
                <Button className="btn btn-secondary">
                    <Link to={`/sensor/visualizar?id=${rowData.id}&name=${rowData.name}`} className="text-dark">Visualizar</Link>
                </Button>
            </div>
        );
    }

    const sensorQuery = useQuery('sensor', () => maquinaFind(request))
    const { data: sensorResponse } = sensorQuery

    useEffect(() => {
        if (sensorResponse && sensorResponse.data) {
            const content = sensorResponse.data.content
            const sensoresComMaquina = content.flatMap(objeto => {
                const maquinaId = objeto.id;
                return objeto.sensores.map(sensor => ({ ...sensor, maquina: maquinaId }));
            });
            setSensor(sensoresComMaquina)
        }
    })
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto  space-y-4">
                <div className="flex item-center justify-betwen">
                   
                    <Button >
                        <PlusCircle className="w-4 h-4 mr-2"/>                   
                         <Link to={`/sensor/editar?id=&action=view`} className="text-white">Adicionar Sensor</Link>
                            </Button>

                </div>
                
                <div className="border rounded">
                    <Table>
                        <TableHeader>
                            <TableHead>id</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>SetPoint</TableHead>
                            <TableHead>Maquina</TableHead>
                            <TableHead>Atividades</TableHead>
                        </TableHeader>
                        <TableBody>
                            {sensor.map((linha, index) => (
                            <TableRow key={index}>
                                <TableCell>{linha.id}</TableCell>
                                <TableCell>{linha.name}</TableCell>
                                <TableCell>{linha.status ? 'Ativo' : 'Inativo'}</TableCell>
                                <TableCell>{linha.setpoint}</TableCell>
                                <TableCell>{linha.maquina}</TableCell>
                                <TableCell>{renderAcoes(linha)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
            </div>
        </>

    )
}

export default Sensor;