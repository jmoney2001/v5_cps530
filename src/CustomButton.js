import React from "react";
import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "55px",
    padding: "0 36px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "linear-gradient(45deg, #7b4397 40%, #dc2430 80%)",
    color: "white",
    transform: "none",
    transition: "background .4s,border-color .4s,color .4s",
    "&:hover": {
      backgroundColor: "#080A52",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function CustomButton(props) {
  return (
    <StyledButton onClick={() => alert(props.message)} variant="contained">
      {props.text}
    </StyledButton>
  );
}

export default CustomButton;
