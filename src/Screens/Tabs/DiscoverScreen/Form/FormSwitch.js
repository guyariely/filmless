import React from 'react';
import Filters from './Filters';
import Categories from './Categories';
import Sorting from './Sorting';

const FormSwitch = props => {

  switch (props.activeTab) {
    case 'filters':
      return (
        <Filters />
      );
    case 'categories':
      return (
        <Categories />
      );
    case 'sorting':
      return (
        <Sorting />
      );
    default:
      return;
  }
};

export default FormSwitch;