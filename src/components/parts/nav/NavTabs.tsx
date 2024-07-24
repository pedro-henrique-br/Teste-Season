import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LogoutButton } from "../../button/LogoutButton";
import { styled } from "@mui/material/styles";
import { AnimalList } from "../../animal/AnimalList";
import { AnimalInfo } from "../../animal/AnimalInfo";
import { RegisterAnimal } from "../../animal/registerAnimal/RegisterAnimal";

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
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
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
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 400,
    width: "100%",
    backgroundColor: "#ffff",
  },
});

interface StyledTabProps {
  label: string;
}

let tabSize;

if (window.screen.width <= 670 && window.screen.width >= 570) {
  tabSize = 14;
} else {
  tabSize = 11;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(tabSize || 18),
  marginRight: theme.spacing(1),
  color: "ffffffe0",
  "&.Mui-selected": {
    color: "#ffffffe0",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#ffffffe0",
  },
}));

export default function Navtabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", background: "#ffff" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: "#FC466B",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example">
          <StyledTab label="Lista de animais" {...a11yProps(0)} />
          <StyledTab label="Proucure um animal" {...a11yProps(1)} />
          <StyledTab label="Registre um animal" {...a11yProps(2)} />
        </StyledTabs>
        <LogoutButton />
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AnimalList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AnimalInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <RegisterAnimal />
      </CustomTabPanel>
    </Box>
  );
}
