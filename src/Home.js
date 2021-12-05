import React from 'react';
import './App.css';

import express_logo from './images/express_logo.png';
import node_logo from './images/node_logo.png';
import react_logo from './images/react_logo.jpg';

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <img src={express_logo} alt="express_logo.png" width="375" height="200"/>
        <img src={node_logo} alt="node_logo.png" width="375" height="200"/>
        <img src={react_logo} alt="react_logo.jpg" width="375" height="200"/>
        
        <ThemeProvider theme={theme}>
        <Typography variant="h3" margin={10} color='purple'>
        CPS530 Final Project
        </Typography>
        <Typography variant="h5" color='purple'>
        Our Decision
        </Typography>
        <Typography variant="h6" marginLeft={15} marginRight={15} marginBottom={10} color='purple'>
        We have chosen to go with react for our front-end, and express for our back-end, while choosing Node.js to combine the two.
        </Typography>
        <Typography variant="h5" color='purple'>
        Front End
        </Typography>
        <Typography variant="h6" marginLeft={15} marginRight={15} marginBottom={10} color='purple'>
        React is the fastest growing front-end framework, and will (if not already) is the most popular front-end framework. The strength is in its popularity. Knowing react well opens up so many doors. React is created and supported by Facebook, and as one could have guessed, Facebook is written in React.
        </Typography>
        <Typography variant="h5" color='purple'>
        Back End
        </Typography>
        <Typography variant="h6" marginLeft={15} marginRight={15} marginBottom={10} color='purple'>
        The beauty of Express.js is the fact that it can be so easily integrated with Node.js. For this reason, Express is arguably the most common back-end framework when it comes to full-stack development, especially when Node.js is involved. The reason why Express.js is so popular is that it is in JavaScript! This means that you do not have to use two different programming languages for your respective front-end and back-ends... Both can be written in the same language!
        </Typography>
        </ThemeProvider>
    </div>
    );
}

export default Page2;