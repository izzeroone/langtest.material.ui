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

import { Grid } from "@material-ui/core";
import classNames from "classnames";
import CircularProgressbar from "react-circular-progressbar";

const styles = {
  profileTitle: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
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
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    float: "left",
    fontSize: "18px"
  },
  blueBackground: {
    backgroundColor: "#03A9F4"
  },
  profileCard: {
    marginLeft: "160px",
    marginRight: "160px"
  },
  totalQuestionText: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    float: "right",
    fontSize: "18px"
  },
  correctQuestionText: {
    color: "#46C00D",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    float: "right",
    fontSize: "18px"
  },
  incorrectQuestionText: {
    color: "#EF2121",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    float: "right",
    fontSize: "18px"
  },
  infoCard: {
    width: "400px",
    minWidth: "400px",
    padding: "20px"
  },
  retryButton: {
    width: "400px",
    minWidth: "400px"
  },
  clearFloat: {
    clear: "both",
    marginBottom: "5px",
    marginTop: "5px"
  },
  progress: {
    width: "200px",
    height: "200px"
  }
};

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      percent: 0
    };
  }
  componentDidMount() {
    this.setState({ percent: 70 });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <Grid className={classes.profileCard}>
          <Card profile className={classes.blueBackground}>
            <CardBody>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <GridItem xs={12} sm={12} md={4}>
                  <h1 className={classes.profileTitle}>Your result</h1>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CircularProgressbar
                    className={classes.progress}
                    percentage={50}
                    initialAnimation
                    background
                    text="50%"
                    styles={{
                      background: {
                        fill: "white"
                      }
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Card className={classes.infoCard}>
                    <div className={classes.clearFloat}>
                      <s className={classes.cardSmallInfo}>TOTAL QUESTION</s>
                      <s className={classes.totalQuestionText}>10</s>
                    </div>
                    <div className={classes.clearFloat}>
                      <s className={classes.cardSmallInfo}>CORRECT QUESTION</s>
                      <s className={classes.correctQuestionText}>5</s>
                    </div>
                    <div className={classes.clearFloat}>
                      <s className={classes.cardSmallInfo}>
                        INCORRECT QUESTION
                      </s>
                      <s className={classes.incorrectQuestionText}>5</s>
                    </div>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <div className={classes.retryButton}>
                    <Button
                      color="danger"
                      size="lg"
                      block
                      onClick={() => {
                        history.push("/quiz");
                      }}
                    >
                      <h5 className={classes.profileTitle}>DO AGAIN</h5>
                    </Button>
                  </div>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Grid>
      </div>
    );
  }
}

ResultScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultScreen);
