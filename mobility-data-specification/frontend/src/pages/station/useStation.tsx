import axios from "axios";
import { useEffect, useState } from "react";
import { Station, StationData } from "./type";

export default function useStations() {
  const [stations, setStations] = useState<Station[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStations = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<StationData[]>(
          "http://localhost:5000/stations"
        );
        const stations = response.data.stations.map((station: Station) => ({
          station_id: station.station_id,
          is_installed: station.is_installed ? "true" : "false",
          is_renting: station.is_renting ? "true" : "false",
          is_returning: station.is_returning ? "true" : "false",
          last_reported: station.last_reported,
          num_bikes_available: station.num_bikes_available,
          num_docks_available: station.num_docks_available,
          num_bikes_available_types: station.num_bikes_available_types,
        }));

        setStations(stations);
      } catch (err) {
        setError(err as React.SetStateAction<null>);
      } finally {
        setIsLoading(false);
      }
    };
    getStations();
  }, []);

  return { stations, isLoading, error };
}
