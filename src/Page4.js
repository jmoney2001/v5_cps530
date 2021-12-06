import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import "./App.css";
import Grid from "./Grid";
/*import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifi1BarIcon from "@mui/icons-material/SignalWifi1Bar";
import SignalWifi1BarLockIcon from "@mui/icons-material/SignalWifi1BarLock";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";
import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
*/

const theme = createTheme({
  palette: {
    primary: {
      main: "#191667",
    },
  },
  typography: {
    fontFamily: ["Lato"],
    h4: {
      fontWeight: 550,
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function Page4() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Typography
            variant="h4"
            margin={10}
            color="primary"
          >
            Your Go-To Guide for Understanding Wi-fi Icons: 6 Examples
          </Typography>
          <Typography variant="h5" color="primary">
            What does each wi-fi sign mean on your notification bar on your
            phone? For whatever various reasons, whether one isn't familiar with
            how wi-fi works, have not used a smartphone before, or are just
            unfamiliar with the new layouts and designs of phones, the different
            sorts of wi-fi signs on one's smartphone can definitely become
            confusing. This is a short guide on how to distinguish each type of
            logo.
          </Typography>
          <Typography
            variant="h5"
            margin={10}
            color="primary"
          >
            *Note that there may be variations in how different companies
            implement their wi-fi icons, so this is not an absolute authoritative
            guide, rather it is a general overview in regards to the way most
            companies will operate.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            /*icon={
              <SignalWifi0BarIcon
                style={{ fill: "#ECC19C", height: "125", width: "125" }}
              />
            }*/
            title="No Wi-fi Signal"
            buttonTitle="Further Explanation"
            popUp="This indicates that this wi-fi network exists, but currently there isn't really any signal strength that one can connect to."
          />
          <Grid
          /*
            icon={
              <SignalWifi1BarIcon
                style={{ fill: "#1E847F", height: "125", width: "125" }}
              />
            }*/
            title="Low Wi-fi Signal"
            buttonTitle="Further Explanation"
            popUp="Wi-fi signal strength can vary widely... This is a case of a signal that tends towards the weaker side. Weaker signal strengths tend to result in more unstable connections."
          />
          <Grid
            icon={
              <SignalWifi2BarIcon
                style={{ fill: "#000000", height: "125", width: "125" }}
              />
            }
            title="Decent Wi-fi Signal"
            buttonTitle="Further Explanation"
            popUp="Wi-fi signal strength can vary widely... This is a case of a signal that is pretty average. Probably far away from router but should work nonetheless."
          />
          <Grid
            /*icon={
              <SignalWifi1BarLockIcon
                style={{ fill: "#000000", height: "125", width: "125" }}
              />
            }*/
            title="Wi-fi Has Password"
            buttonTitle="Further Explanation"
            popUp="This means that there is a wi-fi connection you have not connected to yet, and there is a password on it. To connect to it you must enter the correct password or else you cannot access the wi-fi."
          />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid
            /*icon={
              <SignalWifi4BarIcon
                style={{ fill: "#D9A5B3", height: "125", width: "125" }}
              />
            }*/
            title="Great Wi-fi Signal"
            buttonTitle="Further Explanation"
            popUp="Wi-fi signal strength can vary widely... This is a case of a signal that tends towards the stronger side. Stronger signal strengths tend to result in more stable connections."
          />
          <Grid
            /*icon={
              <SignalWifiOffIcon
                style={{ fill: "#1868AE", height: "125", width: "125" }}
              />
            }*/
            title="Wi-fi Turned Off"
            buttonTitle="Further Explanation"
            popUp="This usually means that the wi-fi feature on your device is turned off... turn it back on to start connecting to wi-fi."
          />
          <Grid
            /*icon={
              <SignalWifiStatusbarConnectedNoInternet4Icon
                style={{ fill: "#C6D7EB", height: "125", width: "125" }}
              />
            }*/
            title="Wi-fi, But No Internet"
            buttonTitle="Further Explanation"
            popUp="This indicates that there is a working wi-fi signal coming from the router, but the internet that the router is connected to does not work. So one can hypothetically connect to this wi-fi network, but cannot access the internet."
          />
        </div>
        <div className={classes.bigSpace}></div>
      </ThemeProvider>
    </div>
  );
}

export default Page4;
