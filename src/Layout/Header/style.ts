import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const RootStyle = styled(AppBar)(({ theme }) => ({
  background: "#181818",
  padding: "1.5rem 3.125rem",
  [theme.breakpoints.down("md")]: {
    padding: "2rem 1.25rem",
  },
}));
