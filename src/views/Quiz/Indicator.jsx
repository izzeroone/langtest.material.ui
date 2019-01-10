import * as React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
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
import CardAvatar from "components/Card/CardAvatar.jsx";
import avatar from "assets/img/faces/marc.jpg";
import Button from "components/CustomButtons/Button.jsx";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import { height } from "window-size";
import { withRouter } from "react-router-dom";
import Countdown from "react-countdown-now";
const styles = {
  blueCard: {
    backgroundColor: "#006497",
    position: "sticky",
    zIndex: 10
  },
  icon: {
    transform: "scale(1.2)",
    marginRight: "10px"
  },
  item: {
    color: "#3C4858",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    textAlign: "left",
    verticalAlign: "center"
  },
  controlCard: {
    width: "500px"
  },
  profileCard: {
    position: "sticky",
    top: "20px",
    zIndex: 10
  },
  time: {
    color: "#777",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontStyle: "italic",
    textAlign: "center",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  cardSmallInfo: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "left",
    verticalAlign: "center"
  }
};

const timeRenderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  } else {
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
};
class Indicator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, history } = this.props;
    return (
      <Grid className={classes.profileCard} container direction="row-reverse">
        <GridItem>
          <Card profile className={classes.controlCard}>
            <CardBody>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <GridItem xs={12} sm={12} md={4}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Icon className={classes.icon}>mood</Icon>
                    <s className={classNames(classes.icon, classes.item)}>12</s>
                    <Icon className={classes.icon}>mood_bad</Icon>
                    <s className={classNames(classes.icon, classes.item)}>12</s>
                  </Grid>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classNames(classes.icon, classes.time)}>
                    Time left:
                    <Countdown
                      date={Date.now() + 1000 * 60 * 5}
                      renderer={timeRenderer}
                    />
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    color="info"
                    round
                    size="sm"
                    onClick={() => {
                      history.push("/result");
                    }}
                  >
                    <Icon style={{ marginRight: "20px" }}>done</Icon>
                    FINISH
                  </Button>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem />
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Indicator));
