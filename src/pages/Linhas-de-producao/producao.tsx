import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LinhaProducaoModel } from "@/model/LinhaProducaoModel";
import { RequestModel } from "@/model/RequestModel";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { find as producaoFind } from "./crud";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { PlusCircle } from "lucide-react";

const request: RequestModel = {
    pageSize: 1000,
    pageNumber: 1,
    sortOrder: 'desc',
    sortField: 'id',
    filter: {},
}

function LinhasDeProducao() {
    const [linhasProducao, setLinhasProducao] = useState<LinhaProducaoModel[]>([])

    const renderAcoes = (rowData: LinhaProducaoModel) => {
        const handleEditar = (id) => {
            window.location.href = `/linhas-producao?id=${id}`;
          };
        return (
            <div className="btn-group" role="group">
            <Button onClick={() => handleEditar(rowData.id)} className="mr-2">Editar</Button>
          </div>
          );
    }

    const producaoQuery = useQuery('producao', () => producaoFind(request))
    const { data: producaoResponse } = producaoQuery

    useEffect(() => {
        if (producaoResponse && producaoResponse.data) {
            const content = producaoResponse.data.content
            setLinhasProducao(content)
        }
    })
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto  space-y-4">
                <div className="flex item-center justify-betwen">
                   
                    <Button >
                        <PlusCircle className="w-4 h-4 mr-2"/>
                            Nova linha de produção
                            </Button>

                </div>
                
                <div className="border rounded">
                    <Table>
                        <TableHeader>
                            <TableHead>id</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Atividades</TableHead>
                        </TableHeader>
                        <TableBody>
                        {linhasProducao.map((linha, index) => (
                            <TableRow key={index}>
                                <TableCell>{linha.id}</TableCell>
                                <TableCell>{linha.name}</TableCell>
                                <TableCell>{linha.status ? 'Ativo' : 'Inativo'}</TableCell>
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

export default LinhasDeProducao;