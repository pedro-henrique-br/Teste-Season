import axios from "axios";

const getAllAnimals = async () => {
  const response = await axios.get(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Accept' : '*/*'
      },
    }
  );
  return response
}

const registerAnimal = async () => {
  const data = await axios.post(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
    {
        nome: "kayn",
        nomeCientifico: "Felis catus",
        nomeEspecie: "Gato",
        cor: "preto",
        codigoChip: null,
        codigoTatuagem: null,
        dataNascimento: "2019-12-15",
        tamanhoPorte: "Grande",
        peso: 7.5,
        temperamento: "Calmo",
        raca: "SRD"
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept : 'application/json',
      },
    }
  );
  console.log(data)
}

const getAnimalInfo = async () => {
  const response = await axios.get(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal/detalhes?id=24',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Accept' : '*/*'
      },
    }
);
console.log(response)
}

const getUserInfo = async () => {
  const response = await axios.get(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Accept' : '*/*'
      },
    }
  );
  console.log(response)
}


export const api = {
  getAllAnimals,
  getUserInfo,
  getAnimalInfo,
  registerAnimal
}