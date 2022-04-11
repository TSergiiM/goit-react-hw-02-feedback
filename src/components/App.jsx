import { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <SectionTitle title="Please leave feedback"></SectionTitle>
        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        ></FeedbackOptions>
        <SectionTitle title="Statistics"></SectionTitle>
        {/* <Statistics></Statistics> */}
        <div>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </div>
      </div>
    );
  }
}
