import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SensorModel } from "@/model/sensorModel";
import { editarSensor, salvarSensor } from "@/services/SensorService";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { save as SensorSave, findOne } from "./crud";



function SensorEdit() {
    const [sensor, setSensor] = useState({
        id: null,
        name: '',
        status: '',
        setpoint: 0,        
        maquina : {
            id: 1
        }
    });  
    const url = new URL(window.location.href);
    const action = url.searchParams.get("action")
    const sensorMutation = useMutation((body: SensorModel) =>
        SensorSave(body)
    )

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        if (id !== null) {
            findOne(parseInt(id)).then((value) => {
                if (value && value.data) {
                    const content = value.data;
                    setSensor(content);
                }
            });
        }
    }, []);

    const salvar = async () => {

        if (action =='edit'){
            await editarSensor(sensor)
        }else{
            await salvarSensor(sensor)
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSensor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSensor({
            id: 0,
            name: '',
            status: '',
            setpoint: 0,
            maquina: 1
        });
    };


    return (
        <>
            <div className="p-6 max-w-4xl mx-auto  space-y-4">
                <div className="flex items-center justify-betwen">

                    <Form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 mr-2">
                            <label htmlFor="name">Nome</label>
                            <Input name="name" placeholder="Nome" value={sensor.name} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-col gap-2 mr-2">
                            <label htmlFor="setpoint">Setpoint</label>
                            <Input name="setpoint" placeholder="Setpoint" value={sensor.setpoint} onChange={handleInputChange} />
                        </div>                        
                    </Form>
                </div>
                <div className="flex flex-center gap-2 mr-2">
                    <Button onClick={() => salvar()}>{action != 'editar' ? 'SALVAR' : 'ALTERAR'}</Button>
                </div>
                <div className="border rounded">

                </div>
            </div>
        </>

    )
}

export default SensorEdit;