import NavTabs from './parts/nav/NavTabs'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Home = () => {


  return (
    <>
    <NavTabs />
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <h1>Welcome</h1>
    </ThemeProvider>
    </>
  )
}
