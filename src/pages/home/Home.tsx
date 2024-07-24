import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navtabs from "../../components/Parts/nav/NavTabs";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const Home = () => {
  return (
    <>
      <Navtabs />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};
