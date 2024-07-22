function isValidCpf(value: string){
  if (typeof value !== 'string') {
  return false;
}
 
value = value.replace(/[^\d]+/g, '');

if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
  return false;
}

const values = value.split('').map(el => +el);
const rest = (count) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

if(rest(10) === values[9] && rest(11) === values[10]){
  return true
}
return false
}


function isPasswordEqual(password: string, confirmPassword: string){
  if(password === confirmPassword){
    return true
  }
  return false
}

  function isValidPassword(password: string){
    if(password.length > 5){
      return false
    }
    return true
  }

function isValidFullName(fullName: string){
  if(fullName.length > 10){
    return true
  }
  return false
}


function isValidBirthday(date: string){
  const year = date.slice(0,4)
  if(year >= "2024" || year <= "1924"){
    return false
  }
  return true
}

function isInputNull(input: string){
  if(!input){
    return true
  }
  false
}


export const validForm = {
  isValidCpf,
  isPasswordEqual,
  isValidFullName,
  isValidPassword,
  isValidBirthday,
  isInputNull,
}