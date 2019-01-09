import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Grid } from "@material-ui/core";
import classNames from "classnames";

const styles = {
  round: {
    backgroundColor: "#C4C4C4",
    width: "26px",
    height: "26px"
  },
  answerText: {
    color: "#000000",
    marginLeft: "15px",
    minHeight: "auto",
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    marginTop: "0px",
    marginBottom: "0px"
  },
  closure: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px"
  }
};

function AnswerButton(props) {
  const { classes, title } = props;
  return (
    <div className={classes.closure}>
      <div className={classes.round} />
      <p className={classes.answerText}>{title}</p>
    </div>
  );
}

export default withStyles(styles)(AnswerButton);
