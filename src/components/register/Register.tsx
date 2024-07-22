import '../../App.css'
import styles from './register.module.css'

import {Typography, Link, Grid, Box, TextField, CssBaseline, Button, Paper, FormHelperText, InputLabel} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Header } from '../../components/parts/header/Header'
import { Aside } from '../../components/parts/aside/Aside';
import { validForm } from '../../services/utils/validForm';
import React, { useState } from 'react';

const defaultTheme = createTheme();

export const Register = () => {

  const [errorFullname, setErrorFullname] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorEqualPassword, setErrorEqualPassword] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorBirthday, setErrorBirthday] = useState(null)
  // const [errorInput, setErrorInput] = useState(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userCredentials = {
      fullname: data.get('Fullname') as string,
      password: data.get('password') as string,
      confirmPassword: data.get('confirmPassword') as string,
      cpf: data.get('cpf') as string,
      birthday: data.get('birthday') as string,
    }

    const {fullname, password, confirmPassword, cpf, birthday} = userCredentials

    const isValidFullname = validForm.isValidFullName(fullname)
    const isValidPassword = validForm.isValidPassword(password)
    const isPasswordEqual = validForm.isPasswordEqual(password, confirmPassword)
    const isValidCpf = validForm.isValidCpf(cpf) 
    const isValidBirthday = validForm.isValidBirthday(birthday) 
    
    isValidFullname ? (setErrorFullname(null)) : (setErrorFullname(true))
    isValidPassword ? (setErrorPassword(null)) : (setErrorPassword(true))
    isPasswordEqual ? (setErrorEqualPassword(null)) : (setErrorEqualPassword(true))
    isValidCpf ? (setErrorCpf(null)) : (setErrorCpf(true))
    isValidBirthday ? (setErrorBirthday(null)) : (setErrorBirthday(true))

    // data.forEach((input) => {
    //   input === "" ? (setErrorInput(true)) : (setErrorInput(false))
    // })
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
                id="full-name"
                label="Full Name"
                name="Fullname"
                />
                </InputLabel>
              {errorFullname && <FormHelperText style={{color: "red"}}  id="component-error-text">The name must be longer than 10 characters</FormHelperText>}
              <InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
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
              {errorCpf && (<FormHelperText style={{color: "red"}}  id="component-error-text">Enter a valid CPF</FormHelperText>)}
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
              {errorBirthday && <FormHelperText style={{color: "red"}}  id="component-error-text">Enter a valid birthday</FormHelperText>}
              </InputLabel>
              <InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              {errorPassword && <FormHelperText style={{color: "red"}}  id="component-error-text">Your password must be longer than 6 characters</FormHelperText>}
              </InputLabel>
              <InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Comfirm Password"
                type="password"
                id="confirmPassword"
              />
              {errorEqualPassword && <FormHelperText style={{color: "red"}}  id="component-error-text">Passwords don't match</FormHelperText>}
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
