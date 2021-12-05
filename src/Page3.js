import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Lato"],
  },
});

function Page3() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography color="purple">
          <h1>Page3</h1>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Page3;
