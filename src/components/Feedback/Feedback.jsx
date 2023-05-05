import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    // eslint-disable-next-line default-case
    switch (event) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;

      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
    }
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (good === 0) {
      return 0;
    }
    return Math.ceil((good * 100) / (good + neutral + bad));
  };

  render() {
    const feedbacks = this.state;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={this.countTotalFeedback(feedbacks)}
            positivePercentage={this.countPositiveFeedbackPercentage(feedbacks)}
          />
        </Section>
      </>
    );
  }
}
