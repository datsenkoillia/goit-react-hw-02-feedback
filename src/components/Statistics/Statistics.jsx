import React from 'react';
import { Notification } from 'components/Notification/Notification';
import { StatisticItem } from './styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total > 0 ? (
        <ul>
          <StatisticItem>
            Good: <span>{good}</span>
          </StatisticItem>
          <StatisticItem>
            Neutral: <span>{neutral}</span>
          </StatisticItem>
          <StatisticItem>
            Bad: <span>{bad}</span>
          </StatisticItem>
          <StatisticItem>
            Total: <span>{total}</span>
          </StatisticItem>
          <StatisticItem>
            Positive feedback:
            <span> {positivePercentage}%</span>
          </StatisticItem>
        </ul>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};

