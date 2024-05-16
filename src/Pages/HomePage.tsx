import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoIcon from "../Components/Svgs/LogoIcon";

export default function HomePage() {
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

      <Button
        onClick={() => {
          alert("hi");
        }}
      >
        Sign In
      </Button>
    </Box>
  );
}
