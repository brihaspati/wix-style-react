import React from 'react';
import BadgeGroupLayout from 'wix-style-react/BadgeGroupLayout';

const options = [
  {id: '0', color: 'red', text: 'Red'},
  {id: '1', color: 'green', text: 'Green'},
  {id: '2', color: 'blue', text: 'Blue'},
  {id: '3', color: 'brown', text: 'Red'},
];

export default {
  category: '12. Other',
  storyName: '12.2 BadgeGroupLayout',
  component: options => <div style={{height: 150}}><BadgeGroupLayout {...options}/></div>,
  componentPath: '../../src/BadgeGroupLayout',

  componentProps: {
    options,
    selectedId: '0'
  },

  exampleProps: {
    selectedId: options.map(({id}) => id),
    options: [
      {label: 'With options', value: options},
    ]
  }
};
