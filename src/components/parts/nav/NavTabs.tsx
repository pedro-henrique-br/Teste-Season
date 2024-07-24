import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { LogoutButton } from '../../LogoutButton';
import { styled } from '@mui/material/styles';
import { GetAnimalList } from '../../GetAnimalList';
import { GetAnimalInfo } from '../../GetAnimalInfo';
import { RegisterAnimal } from '../../RegisterAnimal';

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

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 200,
    width: '100%',
    backgroundColor: '#ffff',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(20),
  marginRight: theme.spacing(1),
  color: 'ffffffe0',
  '&.Mui-selected': {
    color: '#ffffffe0',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#ffffffe0',
  },
}));

export default function Navtabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: "100vh", background: "#ffff" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', background: "#FC466B", display: "flex", justifyContent: "space-around" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Animals List" {...a11yProps(0)}/>
          <StyledTab label="Animals Info" {...a11yProps(1)}/>
          <StyledTab label="Register an Animal"  {...a11yProps(2)}/>
        </StyledTabs>
        <LogoutButton />
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GetAnimalList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GetAnimalInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <RegisterAnimal />
      </CustomTabPanel>
    </Box>
  );
}