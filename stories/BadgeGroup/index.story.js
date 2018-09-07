import BadgeGroup from 'wix-style-react/BadgeGroup';
import {SKIN, TYPE, SIZE} from 'wix-ui-backoffice/dist/src/components/Badge/constants';

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
    onSelect: ({id}) => setState({selectedId: id}),
    uppercase: true
  }),

  exampleProps: {
    selectedId: options.map(({id}) => id),
    type: Object.keys(TYPE),
    size: Object.keys(SIZE)
  }
};
