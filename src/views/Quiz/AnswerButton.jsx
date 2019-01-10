import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
const styles = {
  round: {
    backgroundColor: "#C4C4C4",
    width: "26px",
    height: "26px",
    minWidth: "26px",
    minHeight: "26px"
  },
  roundCorrect: {
    backgroundColor: "#4caf50",
    width: "26px",
    height: "26px",
    minWidth: "26px",
    minHeight: "26px"
  },
  roundIncorrect: {
    backgroundColor: "#f44336",
    width: "26px",
    height: "26px",
    minWidth: "26px",
    minHeight: "26px"
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
  const { classes, title, answerState } = props;
  var indicator = <div className={classes.round} />;
  if (answerState) {
    if (answerState === 1) {
      indicator = <Done nativeColor="white" className={classes.roundCorrect} />;
    }
    if (answerState === 2) {
      indicator = (
        <Close nativeColor="white" className={classes.roundIncorrect} />
      );
    }
  }
  return (
    <div className={classes.closure}>
      {indicator}
      <p className={classes.answerText}>{title}</p>
    </div>
  );
}

// AnswerButton.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default withStyles(styles)(AnswerButton);
