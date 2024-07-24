import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { api } from '../services/utils/api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70  },
  { field: 'nome', headerName: 'nome', width:  90 },
  { field: 'nomeCientifico', headerName: 'nome Cientifico', width:  130 },
  { field: 'nomeEspecie', headerName: 'Especie', width:  90 },
  { field: 'raca', headerName: 'Raça', width:  90 },
  { field: 'codigoChip', headerName: 'Codigo do chip', width:  130 },
  { field: 'codigoTatuagem', headerName: 'Codigo da tatuagem', width:  140 },
  { field: 'dataNascimeto', headerName: 'Data de nascimento', width:  150 },
  { field: 'tamanhoPorte', headerName: 'Tamanho porte', width:  130 },
  { field: 'peso', headerName: 'Peso', width:  130 },
  { field: 'temperamento', headerName: 'Temperamento', width:  130 },
];

// const getAnimalRows = async () => {
//   const response = await api.getAllAnimals()

//   for(const animal in response.data)
//     console.log(animal)
//   }

export const GetAnimalList = () => {
  
  // getAnimalRows()

  const rows = [
    { id: 24, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: 414, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 25, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: 1313, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 26, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: 1311, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 27, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: 31, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 28, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: 313141, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
  ];
  
  return (
    <div style={{ height: "90vh", width: '100%'}}>
    <DataGrid
      rows={rows}
      sx={{cursor: "pointer", padding: 0, background: "#fff"}}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      />
    </div>
  )
}
