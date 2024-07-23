import axios from "axios";

export const auth = async () => {
  if(localStorage.getItem('token') === null){
    try{
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://acesso.cgtecnologia.com.br/realms/pethub/protocol/openid-connect/token',
        new URLSearchParams({
            grant_type: 'password',
            client_id: import.meta.env.VITE_CLIENT_ID,
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept' : '*/*'
          },
        }
      );
      localStorage.setItem('token', response.data.access_token);
    }
    catch(error){
      console.log(error)
    }
  }
}

console.log(localStorage.getItem("token"))