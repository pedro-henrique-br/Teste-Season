// import { api } from '../../services/utils/api';
import { Bounce, toast } from "react-toastify";
import styles from "./registerAnimal.module.css";

import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { api } from "../../../services/utils/api";

export const RegisterAnimal = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const animalInfo = {
      name: data.get("name") as string,
      specieName: data.get("specieName") as string,
      weight: data.get("weight") as unknown as number,
      scientificName: data.get("scientificName") as string,
      color: data.get("color") as string,
      birthday: data.get("birthday") as string,
      animalportSize: data.get("animalportSize") as string,
      animalTemperament: data.get("animalTemperament") as string,
      breed: data.get("breed") as string,
      chipCode: data.get("chipCode") as string,
      tattoCode: data.get("tattoCode") as string,
    };

    console.log(animalInfo)

    const {
      name,
      weight,
      specieName,
      scientificName,
      color,
      birthday,
      animalportSize,
      animalTemperament,
      breed,
      chipCode,
      tattoCode,
    } = animalInfo;
    if (name != "" && weight > 0 && specieName != "") {
      api.registerAnimal(
        name,
        specieName,
        weight,
        scientificName,
        color,
        birthday,
        animalportSize,
        animalTemperament,
        breed,
        chipCode,
        tattoCode
      );
    } else {
      toast.info("Prencher o formulário corretamente!", {
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
    <Box>
      <div className={styles.container}>
        <Box
          id={styles["form-container"]}
          sx={{
            mt: 10,
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Typography component="h1" variant="h4">
            Cadastre um animal
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50vw",
            }}
            component="form"
            noValidate
            onSubmit={handleSubmit}>
            <InputLabel>
              <TextField
                sx={{
                  width: "50vw",
                  margin: "1vh 0 0 0",
                }}
                margin="normal"
                required
                fullWidth
                label="Nome"
                name="name"
                type="string"
              />
            </InputLabel>
            <InputLabel
              style={{
                gap: "15px",
                display: "flex",
                justifyContent: "center",
              }}>
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                required
                fullWidth
                name="specieName"
                label="Nome da especie"
                type="string"
              />
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                label="Nome Cientifico"
                name="scientificName"
                type="string"
              />
            </InputLabel>
            <InputLabel style={{ gap: "15px", display: "flex" }}>
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                required
                fullWidth
                label="Raça"
                name="breed"
                type="string"
              />
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="color"
                label="Cor"
                type="string"
              />
            </InputLabel>
            <InputLabel style={{ gap: "15px", display: "flex" }}>
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="birthday"
                type="date"
                helperText="Data de nascimento do animal"
              />
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="animalportSize"
                label="Tamanho do porte do animal"
                type="string"
              />
            </InputLabel>
            <InputLabel style={{ gap: "15px", display: "flex" }}>
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                required
                fullWidth
                label="Peso"
                name="weight"
                type="string"
              />
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="animalTemperament"
                label="Temperamento do animal"
                type="string"
              />
            </InputLabel>
            <InputLabel style={{ gap: "15px", display: "flex" }}>
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="tattoCode"
                label="Codigo da tatuagem"
                type="string"
              />
              <TextField
                sx={{
                  margin: "1vh 0 1vh 0",
                  width: "25vw",
                }}
                margin="normal"
                fullWidth
                name="chipCode"
                label="Codigo do chip"
                type="string"
              />
            </InputLabel>
            <Button
              id={styles["Button"]}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}>
              Cadastrar animal
            </Button>
          </Box>
        </Box>
        <Box>
          <img
            className={styles.img}
            src="src\assets\img\imageAnimalsLover.png"
            alt="img animal"
          />
        </Box>
      </div>
    </Box>
  );
};
