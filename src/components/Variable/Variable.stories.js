import React from 'react';

import Variable from './Variable';

export default {
  component: Variable,
  title: 'Variable',
  argTypes: {
    name: {
      description: "Name of the variable",
      default: null, 
      control: null,
    },
    value: {
      description: "Value of the variable.",
      default: null, 
      control: null,
    },
    uncertainty: {
      description: "Uncertainty of the variable.",
      default: null, 
      control: null,
    },
    variableModified: {
      description: "This function is subscribed everytime the user change any value on the variable.",
      default: null, 
      control: null,
    },
  },
};

const Template = (args) => <Variable {...args} />;

export const VariableComponent = Template.bind({});
VariableComponent.args = {
  
};