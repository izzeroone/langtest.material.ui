import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AnswerButton from "./AnswerButton";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import QuestionType1 from "./QuestionType1";
import QuestionType4 from "./QuestionType4";
import QuestionType6 from "./QuestionType6";
import QuestionDataPart1 from "./QuestionDataPart1";
import QuestionDataPart2 from "./QuestionDataPart2";
import QuestionDataPart3 from "./QuestionDataPart3";
import QuestionDataPart4 from "./QuestionDataPart4";
import QuestionDataPart5 from "./QuestionDataPart5";
import QuestionDataPart6 from "./QuestionDataPart6";
import QuestionDataPart7 from "./QuestionDataPart7";
import Indicator from "./Indicator";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  questionTitle: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  answerText: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "300px",
    maxHeight: "100%",
    align: "center"
  },
  marginTop10: {
    marginTop: "-40px"
  },
  marginLeft30: {
    marginLeft: "30px",
    marginRight: "30px"
  }
};

function Quiz(props) {
  const { classes } = props;
  return (
    <div>
      <Indicator />
      <GridContainer>
        {QuestionDataPart1.map((question, id) => {
          return (
            <GridItem key={id} xs={12} sm={12} md={12}>
              <QuestionType1 question={question} />;
            </GridItem>
          );
        })}
        {QuestionDataPart2.map((question, id) => {
          return (
            <GridItem key={id} xs={12} sm={12} md={12}>
              <QuestionType1 question={question} />;
            </GridItem>
          );
        })}
        <GridItem xs={12} sm={12} md={12}>
          <QuestionType6 questions={QuestionDataPart3} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <QuestionType6 questions={QuestionDataPart4} />
        </GridItem>
        {QuestionDataPart5.map((question, id) => {
          return (
            <GridItem key={id} xs={12} sm={12} md={12}>
              <QuestionType4 question={question} />;
            </GridItem>
          );
        })}
        <GridItem xs={12} sm={12} md={12}>
          <QuestionType6 questions={QuestionDataPart6} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <QuestionType6 questions={QuestionDataPart7} />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Quiz);
