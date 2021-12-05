import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomButton from "./CustomButton";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".5rem 4rem .5rem 4rem",
  },
  item: {
    paddingTop: ".8rem",
  },
});

function Grid(props) {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>{props.icon}</div>
      <Typography className={classes.item} variant="h5">
        {props.title}
      </Typography>
      <div className={classes.item}>
        <CustomButton message={props.popUp} text={props.buttonTitle} />
      </div>
    </div>
  );
}

export default Grid;
