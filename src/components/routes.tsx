import LinhasDeProducao from "@/pages/Linhas-de-producao/producao";
import Home from "@/pages/home/home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/Navbar";
import LinhasDeProducaoEdicao from "@/pages/Linhas-de-producao/linhaProducaoEdit";
import Maquinas from "@/pages/maquina/Maquina";
import MaquinaEdit from "@/pages/maquina/maquinaEdit";
import Sensor from "@/pages/sensor/Sensor";
import SensorEdit from "@/pages/sensor/sensorEdit";
import SensorVisualizar from "@/pages/sensor/SensorVisualizar";
import CSVUpload from "@/pages/atualizar-sensores/AtualizarSensores";

const AppRoutes = () => {
   return (
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/linhas-producao" element={<LinhasDeProducao />} />
           <Route path="/linhas-producao/editar" element={<LinhasDeProducaoEdicao />} />           
           <Route path="/maquina" element={<Maquinas />} />
           <Route path="/maquina/editar" element={<MaquinaEdit />} />
           <Route path="/sensor" element={<Sensor />} />
           <Route path="/sensor/editar" element={<SensorEdit />} />
           <Route path="/sensor/visualizar" element={<SensorVisualizar />} />
           <Route path="/atualizar-sensores" element={<CSVUpload />} />
       </Routes>
   );
}

export default AppRoutes;
