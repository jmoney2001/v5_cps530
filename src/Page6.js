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
        <div align="left">
            <Typography color='purple' margin={10}>
                <h3>Team Members:</h3>
                <p>Brian Baek (500824663): Front End (React + Material UI)</p>
                <p>Jacob Rokhvarg (500943379): Back End (Node.js + Heroku deployment to the web)</p>
                <p>Renz Evangelista (500900222): Back End (Node.js + Heroku deployment to the web)</p>
                <br/>
                <h3>Credits:</h3>
                <p>- This website was used for colour combination inspirations and ideas - "https://99designs.ca/blog/creative-inspiration/color-combinations/"</p>
            </Typography>
        </div>
    );
}

export default Page6;
