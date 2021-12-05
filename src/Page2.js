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

function Page2() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography color="purple">
          <h3>Setting Up Node.js</h3>
          <p>
            First one must install node.js, which allows you to execute
            JavasScript without a browser.
          </p>
          <h3>Setting Up Visual Studio Code</h3>
          <p>
            It is recommended to install Visual Studio Code (VSCode), where all
            your code can go.{" "}
          </p>
          <h3>Setting Up React</h3>
          <p>Once you have Node.js downloaded.</p>
          <h3>Setting Up Express.js</h3>
          <p>
            First one must install node.js, which allows you to execute
            JavasScript without a browser.
          </p>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Page2;
