import "../../App.css";
import styles from "./login.module.css";

import {
  Typography,
  Link,
  Grid,
  Box,
  TextField,
  CssBaseline,
  Button,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Header } from "../parts/header/Header";
import { Aside } from "../parts/aside/Aside";
import { api } from "../../services/utils/api";
import { auth } from "../../services/auth";
import { Bounce, toast } from "react-toastify";
import { validForm } from "../../services/utils/validForm";

const defaultTheme = createTheme();

export const Login = () => {
  
  auth()

  if(localStorage.getItem("isAuth") != null){
    window.location.href = "/home"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userCredentials = {
      name: data.get("name") as string,
      cpf: data.get("cpf") as string
    }

    const isValidName = validForm.isValidName(userCredentials.name)
    const isValidCpf = validForm.isValidCpf(userCredentials.cpf)

    if(userCredentials.name != "" && userCredentials.cpf != ""){
      if(isValidCpf as string){
        const user = await api.isValidUser(isValidName, isValidCpf as string)
        return user
      }
    } else {
      toast.error('Preencha o formulário corretamente!', {
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
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", width: "100vw" }}>
          <CssBaseline />
          <Grid className={styles.container} item xs={false} sm={4} md={7} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                paddingBottom: "2vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <img
                src="src\assets\img\logo-rosa.png"
                style={{ height: "40px" }}
              />
              <Typography component="h1" variant="h5" sx={{ marginTop: "1vh" }}>
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cpf"
                  label="Cpf"
                  type="string"
                  id="cpf"
                  />
                <Button
                  id={styles["Button"]}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Aside />
    </>
  );
};
