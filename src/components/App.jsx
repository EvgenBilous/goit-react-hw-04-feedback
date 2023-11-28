import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function reset() {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

  const [feedbacks, setFeedbacks] = useState({});

  const onLeaveFeedback = option =>
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      [option]: feedbacks[option] + 1,
    }));

  const countTotalFeedback = () => {
    const totalAmount = good + neutral + bad;
    return totalAmount;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = Math.ceil((good / total) * 100);
    return positive || 0;
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please Leave Feedback'}>
        <Feedback
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(feedbacks)}
        />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            reset={reset}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
export default App;
