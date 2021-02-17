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
  rootActive: {
    marginLeft:"8px",
    display: "flex",
    marginTop: "18px",
    height: "40px",
    width: "fit-content",
    flexDirection: "row",
    padding: "8px 16px 8px 16px",
    color: "var(--blue)",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    fontStyle: "normal",
    borderRadius: "48px",
    background: "var(--lightBlue)"
  },
  icon: {
    flex: 1,
    paddingRight: 11
  },
  text: {
    flex: 6,
  },
}));
export default function DrawerItem(props) {
  const { icon, onClick, isActive, text } = props;
  const classes = useStyles();
  return (
    <div className={isActive ? classes.rootActive : classes.root}>
      <div className={classes.icon}>
        <img src={icon} />
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  );
}
