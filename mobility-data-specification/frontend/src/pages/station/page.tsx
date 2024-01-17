import { DataTable } from "./data-table";
import columns from "./columns";
import useStations from "./useStation";

export default function StationPage() {
  const { stations, isLoading, error } = useStations();
  const tableColumns = columns();

  if (isLoading) {
    return (
      <div className="mx-auto max-2-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="mx-auto max-2-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="mx-auto max-2-7xl px-4 py-6 sm:px-6 lg:px-8">
      <DataTable columns={tableColumns} data={stations} />
    </div>
  );
}
