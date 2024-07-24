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
    toast.error(`An error has occurred ${error}`, {
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
    await axios.post(
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

  toast.success('🐴 Animal successfully registered!', {
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

  } catch (error){
    toast.error(`An error has occurred ${error}`, {
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

const getAnimalInfo = async (id: number) => {
  try{
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal/detalhes?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Accept' : '*/*'
        },
      }

    );
    if(!response){
      toast.error(`Animal not found`, {
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
  const response = await axios.get(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Accept' : '*/*'
      },
    }
  );


  if(response.data.nome === name && response.data.cpf === cpf){
    toast.success('Welcome!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    setTimeout(() => {
      localStorage.setItem("isAuth", "auth")
      window.location.href = "/home"
    }, 2000)
  }
  else{
    toast.info('User not found!', {
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
    toast.error("Erro", error)
}
}

const isUserRegistered = async (name: string, cpf: string, birthday: string) => {
  try{
  const response = await axios.get(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/usuario',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Accept' : '*/*'
      },
    }
  );

  if((response.data.nome === name && response.data.cpf === cpf) && response.data.dataNascimento === birthday){
    toast.success('The informed user already has a registration, we are redirecting you...', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    setTimeout(() => {
      localStorage.setItem("isAuth", "auth")
      window.location.href = "/home"
    }, 2000)}

  else{
    toast.info('Contact the administrator to register', {
      position: "top-right",
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
  } catch(error){
    toast.error("Erro", error)
}
}

export const api = {
  getAllAnimals,
  isValidUser,
  getAnimalInfo,
  registerAnimal,
  isUserRegistered
}