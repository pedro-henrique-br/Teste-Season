import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const auth = async () => {
    try{
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://acesso.cgtecnologia.com.br/realms/pethub/protocol/openid-connect/token',
        new URLSearchParams({
            grant_type: import.meta.env.VITE_GRANT_TYPE,
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
