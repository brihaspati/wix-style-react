import BadgeSelect from 'wix-style-react/BadgeSelect';
import {SKIN, TYPE, SIZE} from 'wix-ui-backoffice/dist/src/components/Badge/constants';

const options = Object.values(SKIN).map((skin, id) => ({
  id: id.toString(),
  skin,
  text: skin
}));

export default {
  category: '12. Other',
  storyName: '12.2 BadgeSelect',
  component: BadgeSelect,
  componentPath: '../../src/BadgeSelect',

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
