import React from 'react';

const FeedbackOptions = ({
  options,
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => (
  <>
    <button
      className="container__button--good"
      name="good"
      onClick={onLeaveFeedbackGood}
    >
      good
    </button>
    <button
      className="container__button--neutral"
      name="neutral"
      onClick={onLeaveFeedbackNeutral}
    >
      neutral
    </button>
    <button
      className="container__button--bad"
      name="bad"
      onClick={onLeaveFeedbackBad}
    >
      bad
    </button>
  </>
);

export default FeedbackOptions;
