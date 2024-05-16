import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MainPage() {
  return (
    <Box className="centralize" sx={{ width: "100vw", height: "100vh" }}>
      <Typography>Welcome!</Typography>
      <Typography>이 페이지를 로그인한 사람만 접근할 수 있습니다</Typography>
    </Box>
  );
}
