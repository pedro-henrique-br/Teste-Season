import { Box, Button, Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { api } from '../../services/utils/api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'animal ID', width:  200 },
  { field: 'nome', headerName: 'nome', width:  200 },
  { field: 'nomeEspecie', headerName: 'Especie', width:  200 },
  { field: 'peso', headerName: 'peso', width:  200 },
  { field: 'cor', headerName: 'cor', width:  200 },
    {
      field: '',
      width: 180,
      align: "center",
      renderCell: (params) => {
          const onClick = () => {
            return params.id
          };
          return (
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="primary" size="small" onClick={onClick}>Ver detalhes</Button>
            </Stack>
          );
      },
    }
];

  const response = await api.getAllAnimals()
  const rows = [];
  for(let i = 0; i < response.length; i++){
    rows.push(response[i])
  }

export const AnimalList = () => {
  
  
  return (
    <Box sx={{width: "100vw", display: "flex", justifyContent: "center"}}>
    <div style={{ height: "90vh", width: '80%'}}>
    <DataGrid
      rows={rows}
      sx={{paddingLeft: 1 , background: "#fff"}}
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
  )
}
