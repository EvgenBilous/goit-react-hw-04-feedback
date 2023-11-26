const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  reset,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Statistics;
