import React from 'react';

import ExpressionField from './ExpressionField';

export default {
  component: ExpressionField,
  title: 'ExpressionField',
  argTypes: {
    expressionChangeFunction: {
      description: "This function is subscribed everytime the user change the value on the input. It is useful to change the current value on the expression display",
      default: null, 
      control: null,
    },
    variablesChangeFunction: {
      description: "This function is subscribed everytime the user change the value on the input. It is useful to change the current list of variables.",
      default: null, 
      control: null,
    },
  },
};

const Template = () => <ExpressionField/>;

export const ExpressionFieldComponent = Template.bind({});
ExpressionFieldComponent.args = {
  expressionChangeFunction: null, 
  variablesChangeFunction: null,
};