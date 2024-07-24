import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { api } from "../../../services/utils/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "nomeEspecie", headerName: "Especie", width: 200 },
  { field: "peso", headerName: "Peso", width: 100 },
  { field: "cor", headerName: "Cor", width: 100 },
];

export const AnimalList = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchAnimalData();
  }, []);

  const fetchAnimalData = async () => {
    try {
      const response = await api.getAllAnimals();
      setRows(response);
    } catch (error) {
      toast.error("Error fetching animal data:", error);
    }
  };

  return (
    <>
      {rows === undefined ? null : (
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
              sx={{
                mt: 1,
                color: "#a32a48",
                background: "#cecece",
                fontWeight: "600",
              }}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 15]}
            />
          </div>
        </Box>
      )}
    </>
  );
};
