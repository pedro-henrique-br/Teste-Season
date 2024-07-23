import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '../../LogoutButton';

export default function Navtabs() {
  const [value, setValue] = React.useState('one');

  const navigate = useNavigate()

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleTabChange = (newTabValue: string) => {

    switch(newTabValue) {
        case 'animals':
          navigate('/home/animals')
            break
    }
};

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" onClick={() => handleTabChange("animals")}/>
        <Tab value="two" label="Item One" onClick={() => handleTabChange("animals")}/>
      </Tabs>
      <LogoutButton />
    </Box>
  );
}