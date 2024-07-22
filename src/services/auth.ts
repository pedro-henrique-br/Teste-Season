import axios from "axios";

export const auth = async () => {
  const response = await axios.post(
    'https://cors-anywhere.herokuapp.com/https://acesso.cgtecnologia.com.br/realms/pethub/protocol/openid-connect/token',
    new URLSearchParams({
        grant_type: 'password',
        client_id: 'pethub-api',
        username: 'nathan.abrahao',
        password: '1gQvy3tjIqs=',
        client_secret: 'ORghXmmumTN11vqZP1a6tQcbp0V86Cfe',
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept' : '*/*'
      },
    }
  );
  console.log(response.data.access_token)
  localStorage.setItem('token', response.data.access_token);
  return response.data.access_token
}

