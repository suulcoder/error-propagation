import React from 'react';

import ExpressionDisplay from './ExpressionDisplay';

export default {
  component: ExpressionDisplay,
  title: 'ExpressionDisplay',
  argTypes: {
    expressionString: {
      description: "This is a string input in latex format",
      control: {type: "text"},
    },
  },
};

const Template = (args) => <ExpressionDisplay {...args} />;

export const ExpressionDisplayComponent = Template.bind({});
ExpressionDisplayComponent.args = {
  expressionString: ""
};