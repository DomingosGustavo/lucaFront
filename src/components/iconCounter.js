import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "8px 16spx 8px 16px",
    color: "var(--gray4)",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "normal",
    fontStyle: "normal",
    marginLeft:"24px",
    marginTop: "18px",
    height: "40px",
  },
  icon: {
    flex: 1,
    paddingRight: 11
  },
  text: {
    flex: 6,
  },
}));
export default function IconCounter(props) {
  const { icon, counter} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <img src={icon} />
      </div>
      <div className={classes.text}>{counter}</div>
    </div>
  );
}