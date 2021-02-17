import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import logo from "../assets/logo.svg";
import DrawerItem from "./drawerItem";
import homeIcon from "../assets/home.svg";
import coursesIcon from "../assets/courses.svg";
import quizIcon from "../assets/quiz.svg";
import studyPlanIcon from "../assets/studyPlan.svg";
import communityIcon from "../assets/community.svg";
import helpCenterIcon from "../assets/helpCenter.svg";
import searchIcon from "../assets/searchIcon.svg";
import Input from "./input";
import IconCounter from "./iconCounter";
import flameIcon from "../assets/flame.svg";
import shield from "../assets/shield.svg";
import flower from "../assets/flower.svg";
import avatar from "../assets/avatar.svg";
import bell from "../assets/bell.svg";

const drawerWidth = 288;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      background: "#ffffff",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down("sm")]: {
      borderStyle: "none none solid none",
      borderColor: "#DBDBDB",
      borderWidth: "1px",
    },
    display: "flex",
    flexDirection: "row",
  },
  appBarSmUp: {
    display: "flex",
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    fontFamily: "Inter",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      background: "#F1F2F8",
    },
    flexBasis: "content",
    flex: "1 0 auto",
    padding: theme.spacing(3),
  },
  input: {
    width: "fit-content",
  },
  searchIcon: {
    flex: 5,
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
  },
  flame: {
    flex: 1,
    marginTop: 22,
  },
  shield: {
    flex: 1,
    marginTop: 22,
  },
  flower: {
    flex: 1,
    marginTop: 22,
  },
  icon: {
    flex: 10,
    marginLeft: 5,
    marginTop: 23,
  },
  side: {
    flex: 5,
    display: "flex",
    flexDirection: "row-reverse",
  },
  avatar: {
    marginTop: 10,
    height: 40,
    marginRight: 48,
  },
  bell: {
    order: 1,
    marginTop: 7,
  },
  footer: {
    borderStyle: "solid none none none",
    borderColor: "#DBDBDB",
    borderWidth: "1px",
  },
}));

function ResponsiveFrame(props) {
  const { window, app } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img src={logo} />
      </div>
      <List>
        <DrawerItem icon={homeIcon} text="Inicio" />
        <DrawerItem icon={coursesIcon} text="Mis cursos" />
        <DrawerItem icon={quizIcon} text="Quizzes" />
        <DrawerItem icon={studyPlanIcon} text="Mi Plan de estudios" />
        <DrawerItem icon={communityIcon} text="Comunidad" isActive />
        <DrawerItem icon={helpCenterIcon} text="Centro de ayuda" />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="transparent"
        elevation={0}
      >
        <Hidden xsDown className={classes.appBarSmUP}>
          <Input text="Explorar" className={classes.input} />
          <div className={classes.searchIcon}>
            <div className={classes.icon}>
              <img src={searchIcon} />
            </div>
          </div>
          <div className={classes.icons}>
            <IconCounter
              icon={flameIcon}
              counter={1}
              className={classes.flame}
            />
            <IconCounter icon={shield} counter={1} className={classes.shield} />
            <IconCounter icon={flower} counter={1} className={classes.flower} />
          </div>
          <div className={classes.side}>
            <div className={classes.bell}>
              <img src={bell} className={classes.bell} />
            </div>
            <div className={classes.profile}>
              <img src={avatar} className={classes.avatar} />
            </div>
          </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.toolbar}>
            <img src={logo} />
          </div>
          <div className={classes.side}>
            <div className={classes.bell}>
              <img src={bell} className={classes.bell} />
            </div>
            <div className={classes.profile}>
              <img src={avatar} className={classes.avatar} />
            </div>
          </div>
        </Hidden>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {app}
      </main>
      <footer className={classes.footer}>
        <Hidden smUp>
          <BottomNavigation>
            <BottomNavigationAction
              value="community"
              icon={<img src={homeIcon} />}
            />
            <BottomNavigationAction
              label="Favorites"
              value="favorites"
              icon={<img src={coursesIcon} />}
            />
            <BottomNavigationAction
              label="Nearby"
              value="nearby"
              icon={<img src={quizIcon} />}
            />
            <BottomNavigationAction
              label="Folder"
              value="folder"
              icon={<img src={studyPlanIcon} />}
            />
            <BottomNavigationAction
              label="Community"
              value="community"
              icon={<img src={communityIcon} />}
            />
          </BottomNavigation>
        </Hidden>
      </footer>
    </div>
  );
}

export default ResponsiveFrame;
