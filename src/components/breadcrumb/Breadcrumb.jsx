import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));

export default function SimpleBreadcrumbs(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            home
          </Link>
          <Typography color="textPrimary">{props.path.pop()}</Typography>
        </Breadcrumbs>
      </Paper>
      <br />
    </div>
  );
}
