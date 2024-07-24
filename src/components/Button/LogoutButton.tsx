import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem("isAuth");
    window.location.href = "/login";
  };

  return (
    <Button
      sx={{
        color: "#ffff",
        alignItems: "center",
        gap: "0px",
        justifyContent: "center",
      }}
      onClick={() => logout()}>
      <LogoutIcon />
    </Button>
  );
};
