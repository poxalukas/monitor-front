import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MaquinaModel } from "@/model/MaquinaModel";
import { RequestModel } from "@/model/RequestModel";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { find as producaoFind } from "./crud";

const request: RequestModel = {
    pageSize: 1000,
    pageNumber: 1,
    sortOrder: 'desc',
    sortField: 'id',
    filter: {},
}

function Maquinas() {
    const [maquina, setMaquina] = useState<MaquinaModel[]>([])

    const renderAcoes = (rowData: MaquinaModel) => {
        const handleEditar = (id) => {
            window.location.href = `/maquina?id=${id}`;
          };
        return (
            <div className="btn-group" role="group">
            <Button onClick={() => handleEditar(rowData.id)} className="mr-2">Editar</Button>
          </div>
          );
    }

    const maquinaQuery = useQuery('maquina', () => producaoFind(request))
    const { data: maquinaResponse } = maquinaQuery

    useEffect(() => {
        if (maquinaResponse && maquinaResponse.data) {
            const content = maquinaResponse.data.content
            setMaquina(content)
        }
    })
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto  space-y-4">
                <div className="flex item-center justify-betwen">
                   
                    <Button >
                        <PlusCircle className="w-4 h-4 mr-2"/>
                            Adicionar Maquina
                            </Button>

                </div>
                
                <div className="border rounded">
                    <Table>
                        <TableHeader>
                            <TableHead>id</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Sequencia</TableHead>
                            <TableHead>Atividades</TableHead>
                        </TableHeader>
                        <TableBody>
                            {maquina.map((linha, index) => (
                            <TableRow key={index}>
                                <TableCell>{linha.id}</TableCell>
                                <TableCell>{linha.name}</TableCell>
                                <TableCell>{linha.status ? 'Ativo' : 'Inativo'}</TableCell>
                                <TableCell>{linha.sequencia}</TableCell>
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

export default Maquinas;