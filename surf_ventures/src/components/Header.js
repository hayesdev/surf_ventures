import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Mukta",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "yellow",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  title: {
    color: "#fff",
    fontFamily: "Mukta",
    fontSize: "3rem",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Surf<span className={classes.colorText}>Ventures</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <h1 className={classes.title}>
          Welcome to <br /> Surf
          <span className={classes.colorText}>Ventures</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
