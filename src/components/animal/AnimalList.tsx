import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { api } from "../../services/utils/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "nome", headerName: "nome", width: 130 },
  { field: "nomeEspecie", headerName: "Especie", width: 200 },
  { field: "peso", headerName: "peso", width: 100 },
  { field: "cor", headerName: "cor", width: 100 },
];
const rows = [];

const getRows = async () => {
  const response = await api.getAllAnimals();
  rows.push(response);
};

getRows();

export const AnimalList = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div style={{ height: "90vh", width: "80%" }}>
          <DataGrid
            rows={rows}
            sx={{ paddingLeft: 1, background: "#fff" }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
      </div>
    </Box>
  );
};
