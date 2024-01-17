import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Station } from "./type";
import { useNavigate } from "react-router-dom";

export default function Columns() {
  const navigate = useNavigate();

  function flexRender(value: Station) {
    console.log("station: ", value);
    navigate("/stationDetails", { state: value });
  }

  const columns: ColumnDef<Station>[] = [
    {
      accessorKey: "station_id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Station ID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "is_installed",
      header: "Is Installed",
    },
    {
      accessorKey: "is_renting",
      header: "Is Renting",
    },
    {
      accessorKey: "is_returning",
      header: "Is Returning",
    },
    {
      accessorKey: "last_reported",
      header: "Last Reported",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const station = row.original;

        return <Button onClick={() => flexRender(station)}>Details</Button>;
      },
    },
  ];
  return columns;
}
