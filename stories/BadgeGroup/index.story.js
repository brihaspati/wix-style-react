import React from 'react';
import BadgeGroup from 'wix-style-react/BadgeGroup';
import {SKIN} from 'wix-ui-backoffice/dist/src/components/Badge/constants';
const options = [
  {id: '0', skin: SKIN.danger, text: 'Red'},
  {id: '1', skin: SKIN.standard, text: 'Green'},
  {id: '2', skin: SKIN.neutral, text: 'Blue'},
  {id: '3', skin: SKIN.general, text: 'Red'}
];

export default {
  category: '12. Other',
  storyName: '12.2 BadgeGroup',
  component: BadgeGroup,
  componentPath: '../../src/BadgeGroup',

  componentProps: setState => ({
    options,
    selectedId: '0',
    onSelect: ({id}) => setState({selectedId: id})
  }),

  exampleProps: {
    // selectedId: options.map(({id}) => id),
    options: [
      {label: 'With options', value: options}
    ]
  }
};
