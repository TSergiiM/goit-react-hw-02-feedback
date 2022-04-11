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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <SectionTitle title="Please leave feedback"></SectionTitle>
        <FeedbackOptions></FeedbackOptions>
        <SectionTitle title="Statistics"></SectionTitle>
        <Statistics></Statistics>
      </div>
    );
  }
}
