import { Box, Button, TextField } from "@mui/material";
import { api } from "../../services/utils/api";
import { useState } from "react";

// props : {id: number}

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 200 },
  { field: "nomeEspecie", headerName: "Especie", width: 200 },
  { field: "nomeCientifico", headerName: "Nome Cientifico", width: 200 },
  { field: "peso", headerName: "Peso", width: 200 },
  { field: "cor", headerName: "Cor", width: 200 },
  { field: "tamanhoPorte", headerName: "Porte do animal", width: 200 },
  { field: "temperamento", headerName: "Temperamento do animal", width: 200 },
  { field: "dataNascimento", headerName: "Data de nascimento", width: 200 },
];

export const AnimalInfo = () => {
  const [animal, setAnimal] = useState(null);

  const rows = [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const animalId = data.get("id") as unknown as number;
    const response = await api.getAnimalInfo(animalId);
    const animal = await response;
    setAnimal(animal);
  };

  rows.push(animal);

  return (
    <Box
      sx={{
        mt: 2,
        width: "100vw",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          width: "80vw",
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="id"
          label="Insira o ID do animal"
          name="id"
          type="number"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}>
          Pesquisar
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {animal && (
          <div style={{ height: 200, width: "100vw", display: "flex" }}>
            <DataGrid
              sx={{ padding: "5px" }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        )}
      </Box>
    </Box>
  );
};
