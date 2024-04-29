import { useEffect, useState } from "react";
import { findOne as producaoFindOne } from "./crud";


function LinhasDeProducaoEdicao() {
    const [linhasProducao, setLinhasProducao] = useState(null);

    useEffect(() => {
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        const action = url.searchParams.get("action")
        if (id != null) {
            producaoFindOne(parseInt(id)).then(value => {
                console.log(value)
            });
            }
    },[]);



    return (
        <>
            <div className="p-6 max-w-4xl mx-auto  space-y-4">
                
                <div className="border rounded">

                </div>
            </div>
        </>

    )
}

export default LinhasDeProducaoEdicao;