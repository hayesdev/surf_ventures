import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlaceCard from "./PlaceCard";
import useWindowPosition from "../hooks/useWindowPosition";
import places from "../static/places";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root}>
      <PlaceCard place={places[0]} checked={checked} />
      <PlaceCard place={places[1]} checked={checked} />
    </div>
  );
}
