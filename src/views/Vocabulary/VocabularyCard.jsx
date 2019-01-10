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
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

const styles = {
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "18px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center"
  },
  cardTitle: {
    color: "#00BCD4",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "center",
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
    width: "280px",
    height: "218px",
    align: "center",
    margin: "auto"
  }
};
class TopicCard extends React.Component {
  state = {
    value: 0,
    isFlip: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      isFlip: !this.state.isFlip
    });
  };
  render() {
    const { classes, topic } = this.props;
    return (
      <Card chart>
        <CardHeader>
          <img className={classes.img} src={topic.img} alt="loading" />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>{topic.name}</h4>
          <p className={classes.cardCategory}>{topic.count} words</p>
        </CardBody>
        <CardFooter chart>
          <Progress
            percent={80}
            status="active"
            strokeWidth={4}
            theme={{
              default: {
                symbol: "%",
                trailColor: "lightblue",
                color: "blue"
              },
              active: {
                symbol: "",
                color: "#78E589"
              }
            }}
          />
        </CardFooter>
      </Card>
    );
  }
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicCard);
