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
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div>
        <SectionTitle title="Please leave feedback"></SectionTitle>
        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        ></FeedbackOptions>
        <SectionTitle title="Statistics"></SectionTitle>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
