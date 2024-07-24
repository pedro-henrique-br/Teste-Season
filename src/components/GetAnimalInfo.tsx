import { Box, Button, TextField } from "@mui/material";

export const GetAnimalInfo = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const animalId = data.get("id");
    console.log(animalId);
  };

  return (
    <Box  sx={{
      mt: 2,
      width: "100vw",
      display: "flex",
      alignSelf: "center",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          width: "50vw",
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="id"
          label="Animal ID"
          name="id"
          type="number"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}>
          Search
        </Button>
      </Box>
      <h1>Div</h1>
    </Box>
  );
};
