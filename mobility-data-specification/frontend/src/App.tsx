import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import axios from "axios";

function App() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getStations = async () => {
      const response = await axios.get("http://localhost:5000/stations");
      const stations = response.data;
      console.log(stations);
      setStations(stations);
    };
    getStations();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
      <pre>{stations && JSON.stringify(stations, null, 2)}</pre>
    </>
  );
}

export default App;
