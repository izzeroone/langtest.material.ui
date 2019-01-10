import React, { createRef } from "react";
import { Flipper, Flipped, ExitContainer } from "react-flip-toolkit";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

 .fadeIn{
  animation: fadeIn .35s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes fadeOut {
  0% { opacity: 1}
  100% { opacity: 0; }
}

 .fadeOut{
  animation: fadeOut .3s forwards;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}

`;

class FlippedMessage extends React.Component {
  onAppear(el, i) {
    setTimeout(() => {
      el.classList.add("fadeIn");
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.remove("fadeIn");
      }, 500);
    }, i * 50);
  }

  onExit(el, i, removeElement) {
    setTimeout(() => {
      el.classList.add("fadeOut");
      setTimeout(removeElement, 500);
    }, i * 50);
  }

  render() {
    const { message } = this.props;
    const letterDict = {};
    message.split(/\s*/g).forEach((l, i) => {
      letterDict[l] = (letterDict[l] || []).concat(i);
    });

    let letterIndex = 0;

    return (
      <ExitContainer>
        <p>
          {message.split(" ").map(word => {
            return (
              <p>
                {word.split("").map(l => {
                  const flipId = `${l}-${letterDict[l].indexOf(letterIndex)}`;
                  letterIndex += 1;
                  return (
                    <Flipped
                      flipId={flipId}
                      onAppear={this.onAppear}
                      onExit={this.onExit}
                      key={flipId}
                    >
                      <span>{l}</span>
                    </Flipped>
                  );
                })}
              </p>
            );
          })}
          <Flipped>
            <div />
          </Flipped>
        </p>
      </ExitContainer>
    );
  }
}

const TitleRow = styled.div`
  border-bottom: 4px solid var(--primary);
  padding: 0.25rem;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`;

class EnterUpdateDeleteStepper extends React.Component {
  state = {
    stage: []
  };

  static defaultProps = {
    onStartTransition: () => {},
    onEndTransition: () => {}
  };

  handleEnterUpdateDelete = ({
    hideEnteringElements,
    animateEnteringElements,
    animateExitingElements,
    animateFlippedElements
  }) => {
    this.props.onStartTransition();
    hideEnteringElements();
    this.setState(
      {
        stageIndex: -1,
        stage: [
          { title: "Exit", init: animateExitingElements },
          { title: "Update", init: animateFlippedElements },
          { title: "Enter", init: animateEnteringElements }
        ]
      },
      this.advanceStage
    );
  };

  advanceStage = () => {
    if (this.state.stageIndex + 1 === this.state.stage.length) {
      this.props.onEndTransition();
    } else {
      const newStageIndex = this.state.stageIndex + 1;
      this.state.stage[newStageIndex].init();
      this.setState({
        stageIndex: newStageIndex
      });
    }
  };
  render() {
    const currentStage = this.state.stage[this.state.stageIndex];
    const { flipKey, defaultTitle } = this.props;

    let btnText = "Start transition";
    if (this.state.stageIndex === this.state.stage.length - 1)
      btnText = "Restart";
    else if (this.state.stage[this.state.stageIndex + 1])
      btnText = (
        <div>
          <b>Next:</b>
          &nbsp;
          {this.state.stage[this.state.stageIndex + 1].title}
        </div>
      );

    const contents = (
      <h1>{(currentStage && currentStage.title) || defaultTitle}</h1>
    );
    {
      this.props.children;
    }
    {
      Boolean(this.state.stage.length) && (
        <button onClick={this.advanceStage}>{btnText}</button>
      );
    }

    return (
      <Flipper
        flipKey={flipKey}
        handleEnterUpdateDelete={this.handleEnterUpdateDelete}
        spring="veryGentle"
      >
        {this.props.children}
        <button onClick={this.advanceStage}>{btnText}</button>
      </Flipper>
    );
  }
}

class Translator extends React.Component {
  state = { msgIndex: 0, key: Math.random() };
  onEndTransition = () => {
    this.setState({ msgIndex: 0, key: Math.random() });
  };
  render() {
    const { firstMsg, secondMsg } = this.props;
    const message = this.state.msgIndex === 0 ? firstMsg : secondMsg;
    return (
      <div key={this.state.key}>
        <GlobalStyle />
        <EnterUpdateDeleteStepper
          flipKey={message}
          onEndTransition={this.onEndTransition}
          defaultTitle="Exit-Update-Enter Demo"
        >
          <FlippedMessage message={message} />
        </EnterUpdateDeleteStepper>
        {this.state.msgIndex === 0 && (
          <button
            onClick={() => {
              this.setState({
                msgIndex: 1
              });
            }}
          >
            Update sentence
          </button>
        )}
      </div>
    );
  }
}

export default Translator;
