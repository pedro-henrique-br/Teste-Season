import axios from "axios"
import { auth } from "./services/auth";

export const Home = () => {

  const register = async () => {
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
      {
        nome: "LUIZ EDUARDO SILVA",
        cpf: "66688529041",
        dataNascimento: "2001-01-01"
      },
      {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              'Accept' : '*/*'
          },
      }
  );
    console.log(response)
  }
  

  const registerAnimal = async () => {
    const data = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
      {
          nome: "Joe",
          nomeCientifico: "Felis catus",
          nomeEspecie: "Gato",
          cor: "Bege com marrom",
          codigoChip: "123",
          codigoTatuagem: "2112",
          dataNascimento: "2015-12-15",
          tamanhoPorte: "Pequeno",
          peso: 24,
          temperamento: "Calmo",
          raca: "SRD",
          foto: "https://img.freepik.com/fotos-gratis/gato-bonito-relaxante-no-estudio_23-2150692717.jpg"
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

  const getAllAnimals = async () => {
    await axios.get(
      'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Accept' : '*/*'
        },
      }
  );
  }

  const getUserInfo = async () => {
    await axios.get(
      'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Accept' : '*/*'
        },
      }
  );
  }

  const ping = async () => {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/ping',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Accept' : '*/*'
        },
      }
  );
  console.log(response.status, response.data.key, response.statusText)
  }


  return (
    <div>
      <button onClick={auth}>auth</button>
      <button onClick={register}>Register user</button>
      <button onClick={registerAnimal}>Register animal</button>
      <button onClick={getAllAnimals}>List of animals</button>
      <button onClick={getUserInfo}>get user info </button>
      <button onClick={ping}>ping</button>
    </div>
  )
}
