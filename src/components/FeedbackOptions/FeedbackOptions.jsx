import React from 'react';
import { Button, ButtonList } from './styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(btn => (
        <Button type="button" key={btn} onClick={() => onLeaveFeedback(btn)}>
          {btn}
        </Button>
      ))}
    </ButtonList>
  );
};

