import { visualizarDados } from "@/services/SensorService";
import { useEffect, useRef, useState } from "react";
import { } from "./crud";
import { set } from "react-hook-form";
import ApexCharts from 'apexcharts';

function SensorVisualizar() {

    const[dados, setDados] = useState([])
    const [nomeSensor, setNomeSensor]= useState('')
    const chartRef = useRef(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        const name = url.searchParams.get("name");
        console.log(name); 
            setNomeSensor(url.searchParams.get("name"));
        if (id !== null) {
            visualizarDados(parseInt(id)).then((value) => {
                const novoArray = value.map(({ timestamp, data }) => [timestamp, data]);
                setDados(novoArray)
                
            });
        }
    }, []);

    useEffect(() => {
        if (dados.length > 0 && chartRef.current) {
          const options = {
            chart: {
              height: 500,
              width: "100%",
              type: "line"
            },
            series: [
              {
                name: "Variação do sensor",
                data: dados
              }
            ],
            xaxis: {
              type: 'numeric'
            },
            tooltip: {
              x: {
                formatter: function (val) {
                  return val.toFixed(1);
                }
              }
            }
          };
    
          const chart = new ApexCharts(chartRef.current, options);
          chart.render();
    
          // Limpar o gráfico quando o componente for desmontado
          return () => {
            chart.destroy();
          };
        }
      }, [dados]);
    
      return (
        <div className="p-6 max-w-4xl mx-auto  space-y-4">
            <h1>Sensor: {nomeSensor}</h1>
            <div id="chart" ref={chartRef}></div>
        </div>
      );
    }
    
    export default SensorVisualizar;