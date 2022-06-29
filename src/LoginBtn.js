import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from "@mui/icons-material/Login";
function LoginBtn() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="mx-auto ">
      <Button
        sx={{ ml: "10px" }}
        variant="contained"
        color="secondary"
        onClick={() => loginWithRedirect({})}
      >
        Login
        <LoginIcon />
      </Button>
    </div>
  );
}

export default LoginBtn;
