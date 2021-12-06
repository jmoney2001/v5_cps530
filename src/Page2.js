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
            JavaScript without a browser.
          </p>
            <p>
              1. Search on Google: "Node.js" and click on the first thing that
              pops up
            </p>
            <p>
              2. There should be two download options. One that is "Recommended
              For Most Users", and a second one for "Latest Features". <br/>Download
              the one that is "Recommended For Most Users" and proceed with the
              installation
            </p>
          <br/>
          <h3>Setting Up Visual Studio Code</h3>
          <p>
            It is recommended to install Visual Studio Code (VSCode), where all
            your code can go.{" "}
          </p>
          <p>
            1. Search on Google: Visual Studio Code and click the first thing
            that pops up
          </p>
          <p>2. Click the download button and proceed with the installation</p>
          <br/>
          <h3>Setting up Git Bash *Optional, But Recommended*</h3>
          <p>
            1. Search on Google: Git Bash and click the first thing that pops up
          </p>
          <p>
            2. Click the download button with whatever operating system you are
            on and proceed with the installation
          </p>
          <br/>
          <h3>Setting Up React</h3>
          <p>1. To set up React, just open Visual Studio Code with a terminal open (PowerShell or Bash for example)</p>
          <p>2. Be in the directory where you want your React Application to be in</p>
          <p>3. Then type in the terminal "npx create-react-app my_app" *you can change my_app into any name you want your application to be*</p>
          <p>4. Once everything is done installing, type in the terminal "npm start". This then should open up your React application in your browser in "http://localhost:3000"</p>
          <br/>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Page2;
