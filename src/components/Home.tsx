import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

// https://cors-anywhere.herokuapp.com/corsdemo

export const Home = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(value)
  };
  

  return (
    <>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Ver animais" value="1" />
          <Tab label="Pesquisar animal" value="2" />
          <Tab label="Cadastrar animais" value="3" />
          <Tab label="Cadastrar Usuario" value="4" />
        </TabList>
      </Box>
    </TabContext>
    </>
  )
}
