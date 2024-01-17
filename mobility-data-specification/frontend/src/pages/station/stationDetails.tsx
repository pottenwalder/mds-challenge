import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLocation, useNavigate } from "react-router-dom";

export default function StationDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    is_installed,
    is_renting,
    is_returning,
    last_reported,
    num_bikes_available,
    num_bikes_available_types,
    num_docks_available,
    station_id,
  } = state;

  const bikes_available_types =
    num_bikes_available_types.classic > 1
      ? "Classic"
      : num_bikes_available_types.electric > 1
      ? "Electric"
      : num_bikes_available_types.smart > 1
      ? "Smart"
      : "None";

  return (
    <div className="w-7/12 mx-auto max-2-7xl px-4 py-6 sm:px-6 lg:px-8  ">
      <div className="border border-black rounded p-3">
        <Button onClick={() => navigate("/")}>Back</Button>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          {station_id}
        </h1>
        <Separator className="my-4" />
        <p>Number of Bikes Available: {num_bikes_available}</p>
        <p>Number of Docks Available: {num_docks_available}</p>
        <p>Last Reported: {last_reported}</p>
        <p>Is Installed: {is_installed}</p>
        <p>Is Renting: {is_renting}</p>
        <p>Is Returning: {is_returning}</p>
        <p> Number of Bikes Available Types: {bikes_available_types}</p>
      </div>
    </div>
  );
}
