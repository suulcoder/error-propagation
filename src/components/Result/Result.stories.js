import React from 'react';

import Result from './Result';

export default {
  component: Result,
  title: 'Result',
  argTypes: {
    expressionString: {
      description: "Expression submitted by the user",
      default: null, 
      control: {type: "text"},
    },
    expressionString: {
      description: "List of tuples of the following structure: (<Variable Name>, <Variable Value>, <Variable Uncertainty>)",
      default: null, 
      control: null,
    },
    prevResultDic: {
      description: "Dictionary of the following structure: {<Result>, <Uncertainty>, <RMSE>}",
      default: null, 
      control: null,
    },
    calculateResultFunction: {
      description: "This function is subscribed everytime the user change any value on the variable. ",
      default: null, 
      control: null,
    },
  },
};

const Template = (args) => <Result {...args} />;

export const ResultComponent = Template.bind({});
ResultComponent.args = {
  expressionString: "a*b",
  variablesList: [["a","1","0.0001"],["b","13.3","0.0031"]],
  prevResultDic: {"total": "13.3", "uncertainty": "0.323", "rmse":"3.23"},
  calculateResultFunction: null,
};