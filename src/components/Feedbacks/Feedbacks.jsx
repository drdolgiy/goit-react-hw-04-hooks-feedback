// import { React, Component } from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
// import { FeedbackOptionsStyled } from './Feedbacks.styled';

export default function Feedback() {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);
   
  const [bad, setBad] = useState(0);
 
  const handleChange = (option) => {

    switch (option) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      
      default:
        return        
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };

return (
  <div>
    <Section title="Please leave Feedback">
          <FeedbackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={handleChange}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() <= 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );    

};
