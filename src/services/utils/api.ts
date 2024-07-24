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

    return response.data

  } catch (error){
    toast.error(`Ocorreu um erro ${error}`, {
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

const registerAnimal = async (name: string, scientificName: string, specieName: string, color: string, chipCode: number, tattoCode: number, birthday: string, portSize: string, weight: number, temperament: string, breed: string) => {
  try{
    await axios.post(
    'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1/animal',
    {
        nome: name,
        nomeCientifico: scientificName,
        nomeEspecie: specieName,
        cor: color,
        codigoChip: chipCode,
        codigoTatuagem: tattoCode,
        dataNascimento: birthday,
        tamanhoPorte: portSize,
        peso: weight,
        temperamento: temperament,
        raca: breed
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept : 'application/json',
      },
    }
  );

  toast.success('🐴 Animal cadastrado com sucesso!', {
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
    toast.error(`Ocorreu um erro ${error}`, {
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
    if(response.data.length === 0){
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
        return false
    }
    return response.data
  }
  catch(error){
    toast.error(`Ocorreu um erro ${error}`, {
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
    toast.success('Bem vindo!', {
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
    toast.success('O usuario informado ja tem cadastro, estamos te redirecionando...', {
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
    toast.info('Contate o seu administrador para se cadastrar', {
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
  isUserRegistered,
}