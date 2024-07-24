import NavTabs from "../parts/nav/NavTabs";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const Home = () => {
  return (
    <>
      <NavTabs />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};
