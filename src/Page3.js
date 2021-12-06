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
        <Typography color="purple" marginLeft={15} marginRight={15} marginBottom={10}>
          <h2>What Makes a Great Looking Page?</h2>
          <br/>
          <h3>Texts</h3>
          <p>A website with proper, readable text is very important. One should go to a website and feel as if they have learned something, or has taken away something from that experience. If a website does not provide adequate information or makes reading difficult, then it takes away from the seamless user experience. A user might have to go on other websites to make up for information that they cannot find or give up mid-way reading because reading became difficult.</p>
          <p>We made the text relatively big, as well as easy to read.</p>
          <br/>
          <h3>Styles</h3>
          <p>The proper use of styles can have such a dramatic effect on how a user ends up interacting with the website. Colours for example can affect our mood, as in affects our psychology and also therefore consumer behaviour. It can affect how we use and navigate the website, making it easier or harder depending on the colours. With this in mind, proper colours are also crucial in regards to accessibility. Styles like how boxes are shaped or the overall layout of a website contributes to how "beautiful" a website can be, which may make people want to stay on the website longer and be more engaged.</p>
          <p>We personally chose to go with color combinations found in this "great color combinations" website (link found in the credits), as well as a white background for the colours to really stand out. We also made our buttons a two-tone gradient color, as well as a grey shade rippling out from where your cursor has clicked the button, indicating that the button has indeed been clicked.</p>
          <br/>
          <h3>Images</h3>
          <p>The proper use of images is also very crucial to the overall user experience. Often times images/logos can portray information in a way text cannot. Images can also sometimes make-up for the poor use of text. Images are also a key component in a website's "look" and "beauty". You'd be hard pressed to find a website designed for consumers without any images/logos. If a company cares about their branding at all, pictures/logos are almost by definition a necessity.</p>
          <p>Because our page is to explain the standard set of icons for wi-fi, we chose to go with icons already provided by Material UI, as they are already designed better than we ever could (more explanations on Material UI down below).</p>
          <br/>
          <h2>Tutorial</h2>
          <br/>
          <h3>Using Material UI</h3>
          <p>Material UI is a library that allows one to use components for our web application. Because we are importing it, these components do not need to be made from scratch and therefore, saving a lot of time. It is an open source project that implements Google's Material Design (Material UI and Material Design are not the same thing). Material UI is a library that uses React, which is maintained by Meta (formerly known as Facebook).</p>
          <br/>
          <p>A big component of the website is using the icons imported from Material UI. On the terminal, you can type "npm install @mui/icons-material", which will give you access to over 1900 icons, which you can then import into your web page and start using them. You can change the colours, sizing, etc.</p>
          <br/>
          <p>Another useful component of the website's design is the use of Material UI's "createTheme", and "ThemeProvider" component. "createTheme" which gives one the ability to give custom properties, and "ThemeProvider" allows you to wrap the entire component with the custom theme.</p>
          <br/>
          <p>A super useful Material UI component is called "Typography", which standardizes text and its properties so one doesn't have to worry about browser compatibility issues.</p>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Page3;
