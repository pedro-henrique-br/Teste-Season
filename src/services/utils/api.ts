import axios from "axios";
import { Bounce, toast } from "react-toastify";

const getAllAnimals = async () => {
  try {
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

  } catch (error){
    toast.error(`Houve um erro ${error}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
}

const registerAnimal = async () => {
  try{
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

  toast.success('Animal cadastrado com sucesso!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  console.log(data)
  } catch (error){
    toast.error(`Houve um erro ${error}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
}

const getAnimalInfo = async () => {
  try{
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
  catch(error){
    toast.error(`Houve um erro ${error}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
}

const isValidUser = async (name: string, cpf: string) => {
  try{
  // const response = await axios.get(
  //   'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
  //   {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       'Accept' : '*/*'
  //     },
  //   }
  // );
  
  const user = {name: "pedro henrique", cpf: "48602895879"}

  if(user.name === name && user.cpf === cpf){
    localStorage.setItem("isAuth", "auth")
    window.location.href = "/home"
  }
  else{
    toast.info('Usuario não encontrado!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    }
  }
  catch(error){
    console.log("erro", error)
    toast.error("Erro", error)
}
}


export const api = {
  getAllAnimals,
  isValidUser,
  getAnimalInfo,
  registerAnimal
}