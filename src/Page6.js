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

function Page6() {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Typography color='purple'>
                <h1>Page6</h1>
            </Typography>
            <Typography variant="h5" color='purple'>
            Brian --> FrontEnd programming
            </Typography>
            <Typography variant="h5" color='purple'>
            Jacob Rokhvarg 500943379 --> Deploying Web Application to Heroku (our chosen cloud platform), FrontEnd programming
            </Typography>
            <Typography variant="h5" color='purple'>
            Renz --> BackEnd programming
            </Typography>
            </ThemeProvider>
        </div>
    );
}

export default Page6;
