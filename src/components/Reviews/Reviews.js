import { useEffect, useState } from 'react';
import s from './Reviews.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';

export default function Reviews() {
  // const [{ neutral = 0, good = 0, bad = 0 }, setState] = useState(0);

  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const onIncreaseGood = () => {
    setGood(state => state + 1);
  };
  const onIncreaseNeutral = () => {
    setNeutral(state => state + 1);
  };
  const onIncreaseBad = () => {
    setBad(state => state + 1);
  };

  // useEffect(() => {
  //   const total = good + bad + neutral;
  //   return total;
  // }, [neutral, good, bad]);

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((good * 100) / countTotalFeedback());

    return percentage;
  };

  return (
    <div className={s.container}>
      <Section title={'Please, leave feedback'}>
        {!good && !neutral && !bad ? (
          <>
            {' '}
            <Notification message={'There is no feedback'} />
            <FeedbackOptions
              options={(neutral, good, bad)}
              onLeaveFeedbackGood={onIncreaseGood}
              onLeaveFeedbackNeutral={onIncreaseNeutral}
              onLeaveFeedbackBad={onIncreaseBad}
            />
          </>
        ) : (
          <>
            <FeedbackOptions
              options={(neutral, good, bad)}
              onLeaveFeedbackGood={onIncreaseGood}
              onLeaveFeedbackNeutral={onIncreaseNeutral}
              onLeaveFeedbackBad={onIncreaseBad}
            />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            />
          </>
        )}
      </Section>
    </div>
  );
}

// class Reviews extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onIncrease = evt => {
//     const { name } = evt.target;

//     this.setState({ [name]: this.state[name] + 1 });

//     return this.state[name];
//   };

//   countTotalFeedback = () => {
//     const total = this.state.good + this.state.bad + this.state.neutral;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percentage = Math.floor(
//       (this.state.good * 100) / this.countTotalFeedback()
//     );

//     return percentage;
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <Section title={'Please, leave feedback'}>
//           {!this.state.good && !this.state.neutral && !this.state.bad ? (
//             <>
//               {' '}
//               <Notification message={'There is no feedback'} />
//               <FeedbackOptions
//                 options={this.state}
//                 onLeaveFeedback={this.onIncrease}
//               />
//             </>
//           ) : (
//             <>
//               <FeedbackOptions
//                 options={this.state}
//                 onLeaveFeedback={this.onIncrease}
//               />
//               <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={this.countTotalFeedback()}
//                 percentage={this.countPositiveFeedbackPercentage()}
//               />
//             </>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Reviews;
