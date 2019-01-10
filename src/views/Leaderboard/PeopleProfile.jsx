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

const styles = {
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  profileCard: {
    marginLeft: "160px",
    marginRight: "160px"
  },
  blueBackground: {
    backgroundColor: "#019AE8"
  },
  smallVioletGreyDot: {
    width: "10px",
    height: "10px",
    cornerRadius: "50%",
    backgroundColor: "#BC9CFF"
  },
  smallYellowGreyDot: {
    width: "10px",
    height: "10px",
    cornerRadius: "50%",
    backgroundColor: "#FFE39C"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "left",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  profileTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontStyle: "italic",
    textAlign: "left",
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
    textAlign: "left"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  img: {
    display: "block",
    maxWidth: "100px",
    maxHeight: "100px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    align: "center",
    objectFix: "cover",
    margin: "auto"
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
  positionText: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "right",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  cardMargin: {
    marginTop: "4px",
    marginBottom: "4px"
  }
};

class PeopleProfile extends React.Component {
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
    const { classes, people } = this.props;
    return (
      <div>
        <Grid className={classes.profileCard}>
          <Card className={classes.cardMargin}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <GridItem xs={12} sm={12} md={2}>
                <img className={classes.img} src={avatar} alt="..." />
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody>
                  <h3 className={classes.profileTitle}>{people.name}</h3>
                  <p className={classes.cardSmallInfo}>
                    Time spend: {people.timeSpent} minutes
                  </p>
                  <Grid
                    container
                    direction="row"
                    justify="flex-st"
                    alignItems="center"
                  >
                    <Icon className={classes.icon}>mood</Icon>
                    <span className={classNames(classes.icon, classes.item)}>
                      {people.correctAnswer}
                    </span>
                    <Icon className={classes.icon}>mood_bad</Icon>
                    <span className={classNames(classes.icon, classes.item)}>
                      {people.incorrectAnswer}
                    </span>
                  </Grid>
                </CardBody>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <h1 className={classes.positionText}>{people.ranking}</h1>
              </GridItem>
            </Grid>
          </Card>
        </Grid>
      </div>
    );
  }
}

PeopleProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  people: PropTypes.object.isRequired
};

export default withStyles(styles)(PeopleProfile);
