import "../../App.css";
import styles from "./login.module.css";

import {
  Typography,
  Link,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Header } from "../parts/header/Header";
import { Aside } from "../parts/aside/Aside";
import { api } from "../../services/utils/api";

const defaultTheme = createTheme();

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api.getUserInfo();
    console.log({
      userName: data.get("username"),
      password: data.get("password"),
    });
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
                onSubmit={(e) => handleSubmit(e)}
                sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
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
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
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
