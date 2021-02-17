import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import arrowDown from "../assets/arrowDown.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    marginTop: "10px",
    height: "36px",
    width: "100%",
    borderRadius: "10px",
    textAlign: "left",
    border: "2px solid rgba(38, 38, 38, 0.25)",
    boxSizing: "border-box",
  },
  rootTextArea: {
    display: "flex",
    flexDirection: "column",
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "normal",
    height: "150px",
    fontStyle: "normal",
    marginTop: "10px",
    width: "100%",
    borderRadius: "10px",
    textAlign: "left",
    border: "2px solid rgba(38, 38, 38, 0.25)",
    boxSizing: "border-box",
  },
  text: {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "600",
    color: "#565656",
    fontStyle: "normal",
    flex: 6,
  },
  input: {
    marginTop: 10,
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
  },
}));
export default function BasicInput(props) {
  const { onChange, text = "", label = "", textArea } = props;
  const classes = useStyles();
  return (
    <div className={classes.input}>
      <label className={classes.text}>{label}</label>
      {!textArea ? (
        <input
          className={classes.root}
          placeholder={" " + text}
          onChange={(value) => onChange(value.target.value)}
        />
      ) : (
        <textarea
          className={classes.rootTextArea}
          placeholder={" " + text}
          onChange={(value) => onChange(value.target.value)}
        />
      )}
    </div>
  );
}
