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
import TopicData from "./TopicData";
import topic2 from "./VocabularyList";
import Button from "components/CustomButtons/Button.jsx";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import TopicCard from "./VocabularyCard";
import WordCard from "./WordCard";
import { Grid } from "@material-ui/core";
import LearnWordCard from "./LearnWordCard";
import CircularProgressbar from "react-circular-progressbar";
import Slider, { Range } from "rc-slider";

const styles = {
  profileCard: {
    marginLeft: "160px",
    marginRight: "160px"
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
    fontSize: "28px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  topicTitle: {
    color: "#00BCD4",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "16px",
    marginLeft: "16px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "40px",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  profileTitle: {
    color: "#0099DA",
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
  img: {
    display: "block",
    maxWidth: "280px",
    maxHeight: "218px",
    align: "center",
    objectFix: "cover",
    margin: "auto"
  },
  card: {
    marginLeft: "100px",
    marginRight: "100px"
  },
  avatar: {
    display: "block",
    width: "140px",
    height: "140px",
    maxWidth: "140px",
    maxHeight: "140px",
    itemAlign: "center",
    objectFix: "cover",
    borderRadius: "10px"
  },
  cardPadding: {
    paddingLeft: "180px",
    paddingRight: "180px"
  },
  progress: {
    width: "120px",
    height: "120px"
  }
};
class LearnWordScreen extends React.Component {
  state = {
    value: 0
  };
  componentDidMount() {
    this._clockCall = setInterval(() => {
      this.setState({ value: (this.state.value + 10) % 100});
    }, 1000);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.cardPadding}
        container
        direction={"column"}
        alignItems="center"
        justify="center"
      >
        <LearnWordCard word={topic2[0]} />
        <div>
          <CircularProgressbar
            className={classes.progress}
            percentage={this.state.value}
            initialAnimation
            background
            styles={{
              background: {
                fill: "white"
              }
            }}
          />
        </div>
        <Slider
          railStyle={{ height: "16px", color: "#019AE8" }}
          trackStyle={{ height: "16px", backgroundColor: "#019AE8" }}
          dotStyle={{ height: "16px" }}
          style={{ marginTop: "16px" }}
        />
      </Grid>
    );
  }
}

LearnWordScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LearnWordScreen);
