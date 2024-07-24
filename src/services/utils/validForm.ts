import { Bounce, toast } from "react-toastify";

function isValidCpf(value: string){
  if (typeof value !== 'string') {
    toast.error('Insira um Cpf válido!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  return false;
}
 
value = value.replace(/[^\d]+/g, '');

if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
  toast.error('Insira um Cpf válido!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  })
  return false;
}

const values = value.split('').map(el => +el);
const rest = (count) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

if(rest(10) === values[9] && rest(11) === values[10]){
  return value
}
toast.error('Insira um Cpf válido!', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
})
}

function isValidName(name: string){
  if(name.length < 10 && name.length > 0){
    toast.error('O nome precisa ter mais que 10 caracteres!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  } else {
    return name  
  }
}


function isValidBirthday(date: string){
  const year = date.slice(0,4)
  if(year >= "2024" || year <= "1924"){
    toast.error('Insira uma Data de nascimento válida!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }
  return date
}

export const validForm = {
  isValidCpf,
  isValidName,
  isValidBirthday,
}