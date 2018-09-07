import BadgeGroup from 'wix-style-react/BadgeGroup';
import {SKIN} from 'wix-ui-backoffice/dist/src/components/Badge/constants';

const options = Object.values(SKIN).map((skin, id) => ({
  id: id.toString(),
  skin,
  text: skin
}));

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
    selectedId: options.map(({id}) => id),
    options: [
      {label: 'With options', value: options}
    ]
  }
};
