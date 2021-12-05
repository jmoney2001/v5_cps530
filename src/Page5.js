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

function Page5() {
  return (
    <div align="left">
      <ThemeProvider theme={theme}>
        <Typography color="purple" margin={10}>
          <h3>- They did indeed perform to our expectations</h3>
          <br />
          <h3>
            - At first there is definitely a learning curve, especially if you
            haven't used frameworks before in the context of web development.
          </h3>
          <br />
          <h3>
            - However relative to other frameworks, it is not particularly
            difficult to install/configure, however to people starting out it is
            definitely difficult to install/configure. It is a rather daunting
            task.
          </h3>
          <br />
          <h3>
            - After the initial hump, it is rather easy to create pages with it.
            Almost by definition, frameworks exist to make programmer's lives
            easier, so while simpler web pages would be easier to create with
            vanilla HTML/CSS/JavaScript, more complicated front-end work is
            definitely made easier using frameworks like React, Angular, Vue,
            etc.{" "}
          </h3>
          <br />
          <h3>
            - The learning curve was a little steep compared with regular
            HTML/CSS/JavaScript/PHP.
          </h3>
          <br />
          <h3>
            - We would not have done things differently in retrospect. Using
            frameworks definitely made things harder at first, but much more
            rewarding after the initial hurdle. Especially with the use of
            Material-UI, decent looking components were much easier to make.
          </h3>
          <br />
          <h3>
            - We do not regret our choice of frameworks at all. React, Express,
            Node are very popular within the industry, so this was a great
            opportunity to really practice these skills.
          </h3>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Page5;
