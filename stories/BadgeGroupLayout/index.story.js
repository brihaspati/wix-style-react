import React from 'react';
import BadgeGroupLayout from 'wix-style-react/BadgeGroupLayout';
import {SKIN} from 'wix-ui-backoffice/dist/src/components/Badge/constants';
const options = [
  {id: '0', skin: SKIN.danger, text: 'Red'},
  {id: '1', skin: SKIN.standard, text: 'Green'},
  {id: '2', skin: SKIN.neutral, text: 'Blue'},
  {id: '3', skin: SKIN.general, text: 'Red'}
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
      {label: 'With options', value: options}
    ]
  }
};
