import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeOptionBuilder} from './BadgeOptionBuilder';
import styles from './BadgeGroup.scss';
import noop from 'lodash/noop';
import Badge from '../Badge/Badge';
import {ChevronDown} from 'wix-ui-icons-common';
import {SKIN, SIZE, TYPE} from '../../../wix-ui-backoffice/dist/src/components/Badge/constants';

export default class BadgeGroup extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      skin: PropTypes.oneOf(Object.keys(SKIN)),
      text: PropTypes.string
    })),
    selectedId: PropTypes.string,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(Object.keys(SIZE)),
    type: PropTypes.oneOf(Object.keys(TYPE)),
    uppercase: PropTypes.bool
  };

  static defaultProps = {
    onSelect: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedBadge: props.options.find(({id}) => id === props.selectedId)
    };
  }

  componentWillReceiveProps({selectedId}) {
    if (this.props.selectedId !== selectedId) {
      this.setState({
        selectedBadge: this.props.options.find(({id}) => id === selectedId)
      });
    }
  }

  get options() {
    const {options} = this.props;
    return map(options, badgeOptionBuilder);
  }

  toggleDropdown = () => {
    this.setState({visible: !this.state.visible});
  }

  handleSelect = ({id: selectedId}) =>{
    const selectedBadge = this.props.options.find(({id}) => id === selectedId);
    this.setState({selectedBadge});
    this.props.onSelect(selectedBadge);
    this.setState({visible: false});
  }

  render() {
    const {type, size, uppercase} = this.props;

    return (
      <div>
        <div className={styles.badge_holder}>
          <div className={styles.badge}>
            <Badge
              {...{type, size, uppercase}}
              suffixIcon={<ChevronDown/>}
              onClick={this.toggleDropdown}
              skin={this.state.selectedBadge.skin}
              >
              {this.state.selectedBadge.text}
            </Badge>
          </div>
        </div>
        <div className={styles.container}>
          <DropdownLayout
            visible={this.state.visible}
            selectedId={this.state.selectedBadge.id}
            options={this.options}
            onSelect={this.handleSelect}
            isInContainer
            onClickOutside={()=>this.setState({visible: false})}
            />
        </div>
      </div>
    );
  }
}
