import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { GetAnimalInfo } from './GetAnimalInfo';
// import { api } from '../services/utils/api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70  },
  { field: 'nome', headerName: 'nome', width:  90 },
  { field: 'nomeCientifico', headerName: 'nome Cientifico', width:  130 },
  { field: 'nomeEspecie', headerName: 'Especie', width:  90 },
  { field: 'raca', headerName: 'Raça', width:  90 },
];


export const GetAnimalRows = () => {
  // const animalsData = api.getAllAnimals()
  
  // for(const key in animalsData){
  //   console.log(key)
  // }
  
  const rows = [
    { id: 24, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: null, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 25, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: null, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
    { id: 26, nome: 'joe', nomeCientifico: "Felis catus", nomeEspecie: "Gato", cor: "Bege com marrom", codigoChip: null, codigoTatuagem: null, dataNascimento: "2015-12-15", tamanhoPorte: "Pequeno", peso: 2.4, temperamento: "Calmo", raca: "SRD" },
  ];
  
  return (
    <div style={{ height: 400, width: '60%' }}>
    <DataGrid
      rows={rows}
      sx={{cursor: "pointer"}}
      // onRowClick={(animal) => <GetAnimalInfo id={animal.id}/>}
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
