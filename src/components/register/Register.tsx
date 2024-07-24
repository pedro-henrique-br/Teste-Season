import '../../App.css'
import styles from './register.module.css'

import {Typography, Link, Grid, Box, TextField, CssBaseline, Button, Paper, InputLabel} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Header } from '../../components/parts/header/Header'
import { Aside } from '../../components/parts/aside/Aside';
// import { validForm } from '../../services/utils/validForm';
import { Bounce, toast } from 'react-toastify';
import { auth } from '../../services/auth';
import { api } from '../../services/utils/api';
import { validForm } from '../../services/utils/validForm';

const defaultTheme = createTheme();

export const Register = () => {

  auth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userCredentials = {
      name: data.get('name') as string,
      cpf: data.get('cpf') as string,
      birthday: data.get('birthday') as string,
    }

    const reverseBirthday = userCredentials.birthday.split("")
    const validFormatBirthbay = reverseBirthday.join("")
 
    console.log(validFormatBirthbay)

    const isValidName = validForm.isValidName(userCredentials.name)
    const isValidCpf = validForm.isValidCpf(userCredentials.cpf)
    const isValidBirthday = validForm.isValidBirthday(validFormatBirthbay)

    if((userCredentials.name != "" && userCredentials.cpf != "") && userCredentials.birthday != ""){
      api.isUserRegistered(isValidName, isValidCpf ? (isValidCpf) : (null), isValidBirthday)
    }
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
  };
  return (
    <>
    <Header />
    <ThemeProvider theme={defaultTheme}>
      <Grid  container component="main" sx={{ height: '100vh', width: "100vw"}}>
        <CssBaseline />
        <Grid 
          className={styles.container}
          item
          xs={false}
          sm={4}
          md={7}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              paddingBottom: "2vh",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src='src\assets\img\logo-rosa.png' style={{height: "40px"}} />
            <Typography component="h1" variant="h5" sx={{marginTop: "1vh"}}>
              Register
            </Typography>
            <Box className={styles.Box} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
                <InputLabel>
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                />
                </InputLabel>
              <InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="cpf"
                label="Cpf"
                id="cpf"
                />
              </InputLabel>
              <InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="birthday"
                type="date"
                id="birtday"
                helperText="Please enter your birthday"
                />
              </InputLabel>
              <Button
                id={styles["Button"]}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2}}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
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
  )
}