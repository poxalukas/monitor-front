import { editarSensorCsv } from "@/services/SensorService";
import { useState } from "react";

const CSVUpload = () => {
  const [csvData, setCsvData] = useState(null);
  const [sensorObjects, setSensorObjects] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const content = e.target.result;
      setCsvData(content);
      const parsedObjects = parseCSVData(content);
      setSensorObjects(parsedObjects);
      parsedObjects.forEach(async (sens) => {
        await editarSensorCsv(sens);
      });
    };

    reader.readAsText(file);
  };

  const parseCSVData = (csvData) => {
    const lines = csvData.split('\n');
    const objects = [];

    for (let i = 0; i < lines.length; i++) {
      const columns = lines[i].split(',');
      if (columns.length === 2) {
        const name = columns[0].trim();
        const setpoint = parseInt(columns[1].trim());
        if (!isNaN(setpoint)) {
          objects.push({ name, setpoint, maquina: { id: 1 } });
        }
      }
    }

    return objects;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto  space-y-4">
      <div className="flex-column item-center justify-betwen">
        <h2>Upload de arquivo CSV</h2>
        <br />
        <input type="file" accept=".csv" onChange={handleFileChange} />
        {sensorObjects.length > 0 && (
          <div>
            <h3>enviados para atualização:</h3>
            <ul>
              {sensorObjects.map((obj, index) => (
                <li key={index}>{JSON.stringify(obj)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CSVUpload;
