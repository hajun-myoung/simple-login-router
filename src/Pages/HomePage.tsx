import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoIcon from "../Components/Svgs/LogoIcon";
import { useCallback, useContext, useEffect } from "react";
import { AuthContext, HandleAuthContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const user = useContext(AuthContext);
  const setUser = useContext(HandleAuthContext);
  const navigate = useNavigate();

  const signin = useCallback(() => {
    if (setUser) {
      setUser({
        id: 1,
        name: "nomad",
      });
    } else {
      alert("Failed to signin");
    }
  }, [setUser]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Box
      className="centralize"
      sx={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Box className="centralize" sx={{ width: 64, aspectRatio: 1 }}>
        <LogoIcon />
      </Box>
      <Typography>Hello, Nomad Coder!</Typography>
      <Typography>이 페이지는 누구나 접근할 수 있습니다</Typography>
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={() => {
            signin();
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            navigate("/main");
          }}
        >
          Go to Main
        </Button>
      </Box>
    </Box>
  );
}
