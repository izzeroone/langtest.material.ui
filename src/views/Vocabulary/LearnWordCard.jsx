import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Progress } from "react-sweet-progress";
import { bugs, website, server } from "variables/general.jsx";
import Highlighter from "react-highlight-words";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import { Grid } from "@material-ui/core";
import ReactCardFlipper from "react-card-flipper";
import FlipMotion from "react-flip-motion";
import Translator from "./Translator";
const styles = {
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "18px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center",
    verticalAlign: "center"
  },
  exampleText: {
    color: "#9f9f9f",
    margin: "0",
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "0",
    textAlign: "center",
    verticalAlign: "center",
    height: "60px",
    lineHeight: "20px"
  },
  cardTitle: {
    color: "#00BCD4",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "left",
    fontSize: "26px",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  img: {
    display: "block",
    width: "200px",
    height: "auto",
    align: "center",
    margin: "auto"
  },
  icon: {
    align: "center"
  },
  pronoun: {
    fontStyle: "italic"
  }
};
class WordCard extends React.Component {
  state = {
    word: false,
    text: []
  };
  componentDidMount() {
    const { word } = this.props;

    this.setState({
      text: [word.word]
    });
  }
  handleChange = () => {
    this.setState({ word: !this.state.word });
    // this.setState({
    //   text: [this.props.word.id]
    // });
  };

  render() {
    const { classes, word } = this.props;
    return (
      <Grid container direction="column">
        <Card
          onClick={() => {
            this.handleChange();
          }}
        >
          <CardBody>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <img className={classes.img} src="./images/img/t1w1.jpg" />
              </Grid>
              <p className={classes.cardTitle}>{word.word}</p>
              <p className={classes.cardCategory}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Icon className={classes.icon}>volume_up</Icon>
                  <span className={classes.pronoun}>[{word.pronoun}]</span>
                </Grid>
              </p>
            </Grid>
          </CardBody>
          <CardFooter chart>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <p className={classes.exampleText}>
                <Highlighter
                  searchWords={[word.word]}
                  autoEscape={true}
                  highlightTag="u"
                  unhighlightClassName={classes.exampleText}
                  textToHighlight={word.ex}
                />
              </p>
            </Grid>
          </CardFooter>
        </Card>
      </Grid>
    );
  }
}

WordCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WordCard);
