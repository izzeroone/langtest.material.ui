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
    fontWeight: "400",
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

class BaseQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerState: [0, 0, 0, 0],
      isAnswer: false
    };
  }

  answerQuestion = index => {
    if (this.state.isAnswer) {
      return;
    }
    const { question } = this.props;
    var answerState = this.state.answerState;
    answerState[index] = 2;
    answerState[question.correctAnswer] = 1;
    this.setState({
      answerState: answerState,
      isAnswer: true
    });
  };
  render() {
    const { classes, question } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.questionTitle}>
                  {question.id}. {question.question}
                </p>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                {question.type === "3" &&
                  question.imageAsset && (
                    <img
                      className={classes.img}
                      alt="loading"
                      src={question.imageAsset}
                    />
                  )}
              </GridItem>
            </GridContainer>
            <GridContainer>
              {question.answer.map((answer, id) => {
                return (
                  <GridItem key={id} xs={6} sm={6} md={3}>
                    <AnswerButton
                      answerState={this.state.answerState[id]}
                      title={answer}
                      id={id}
                      answerFunction={() => {
                        this.answerQuestion(id);
                      }}
                    />
                  </GridItem>
                );
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(BaseQuestion);
