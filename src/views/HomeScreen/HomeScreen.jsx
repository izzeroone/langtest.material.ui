import React from "react";
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
class HomeScreen extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <Grid className={classes.profileCard}>
          <Card profile>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <GridItem xs={12} sm={12} md={8}>
                <CardBody>
                  <h3 className={classes.profileTitle}>Your result</h3>
                  <p className={classes.cardSmallInfo}>
                    Time spend: 1212 minutes
                  </p>
                  <p className={classes.cardSmallInfo}>Question: 12</p>
                </CardBody>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="danger" round size="lg">
                  <Icon style={{ marginRight: "20px" }}>done</Icon>
                  BEGIN TEST
                </Button>
              </GridItem>
            </Grid>
          </Card>
        </Grid>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>photo</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Photographs</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>textsms</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Response</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>question_answer</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Conversation</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>record_voice_over</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Talks</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>space_bar</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Rose</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIcon color="rose">
                  <Icon>border_color</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Text Completion</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>notes</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>Passages</h3>
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
                    }
                  }}
                />
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(HomeScreen);
