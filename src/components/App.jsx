import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { useState } from 'react';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   reset = () => {
//     this.setState({ good: 0, neutral: 0, bad: 0 });
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     const totalAmount = good + neutral + bad;
//     return totalAmount;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const positive = Math.ceil((this.state.good / total) * 100);
//     return positive || 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);

//     return (
//     <div>
//       <Section title={'Please Leave Feedback'}>
//         <Feedback onLeaveFeedback={this.onLeaveFeedback} options={options} />
//       </Section>
//       <Section title={'Statistics'}>
//         {total ? (
//           <Statistics
//             reset={this.reset}
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             positivePercentage={positiveFeedback}
//           />
//         ) : (
//           <Notification message={'There is no feedback'} />
//         )}
//       </Section>
//     </div>
//   );
// }
//}

// export default App;

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
    setFeedbacks(feedback => ({
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
  //const options = Object.keys(state);
  return (
    <div>
      <Section title={'Please Leave Feedback'}>
        <Feedback onLeaveFeedback={onLeaveFeedback} options={options} />
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
