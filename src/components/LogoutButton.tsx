import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

export const LogoutButton = () => {

  const logout = () => {
    localStorage.removeItem("isAuth")
    window.location.href = "/login"
  }

  return (
    <Button sx={{color: "#fff", display: "flex", alignItems: "center", gap: "5px", justifyContent: "center"}} onClick={() => logout()}>
      Logout
      <LogoutIcon />
    </Button>
  )
}
