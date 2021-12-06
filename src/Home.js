import React from 'react';
import './App.css';

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
        We have chosen to go with react for our front-end, and Node.js for our back-end.
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
         The beauty of Node.js is that it allows you to execute JavaScript code without using a browser. As a side benefit, because it is so ubiquitously used within the industry, having a solid grasp on Node.js will open so many more opportunities. It is very fast and has great community support.
        </Typography>
        </ThemeProvider>
    </div>
    );
}

export default Page2;

        </Typography>
        </ThemeProvider>
    </div>
    );
}

export default Page2;
