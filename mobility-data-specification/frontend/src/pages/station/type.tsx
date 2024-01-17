export type StationData = {
  stations: Station[];
};

export type Station = {
  is_installed: string | number;
  is_renting: string | number;
  is_returning: boolean | number;
  last_reported: number;
  num_bikes_available: number;
  num_bikes_available_types: NumBikesAvailableTypes;
  num_docks_available: number;
  station_id: string;
};

export type NumBikesAvailableTypes = {
  classic: boolean | number;
  electric: boolean | number;
  smart: boolean | number;
};
