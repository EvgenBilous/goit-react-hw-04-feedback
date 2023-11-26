import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  reset = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const totalAmount = good + neutral + bad;
    return totalAmount;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = Math.ceil((this.state.good / total) * 100);
    return positive || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title={'Please Leave Feedback'}>
          <Feedback onLeaveFeedback={this.onLeaveFeedback} options={options} />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              reset={this.reset}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
