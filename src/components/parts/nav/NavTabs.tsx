import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '../../LogoutButton';
import { GetAnimalRows } from '../../GetAnimalRows';
import { GetAnimalInfo } from '../../GetAnimalInfo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navtabs() {
  const [value, setValue] = React.useState('one');

  // const navigate = useNavigate()

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

//   const handleTabChange = (newTabValue: string) => {

//     switch(newTabValue) {
//         case 'animals':
//           navigate('/home/animals')
//             break
//     }
// };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Animal List" {...a11yProps(0)} />
          <Tab label="Search Animal" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <LogoutButton />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GetAnimalRows />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1>Proucurar animal</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GetAnimalInfo id={24} />
      </CustomTabPanel>
    </Box>
  );
}