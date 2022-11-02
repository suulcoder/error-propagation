import React from 'react';

import Header from './Header';

export default {
  component: Header,
  title: 'Header',
  parameters: {
    docs: {
      page: null,
    },
  },
};

const Template = () => <Header/>;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
};