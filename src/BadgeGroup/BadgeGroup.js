import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeGroupItemBuilder} from '../BadgeGroupItemBuilder';
import styles from './BadgeGroup.scss';
import noop from 'lodash/noop';
import Badge from '../Badge/Badge';
import {ChevronDown} from 'wix-ui-icons-common';
import ReactDOM from 'react-dom';

export default class BadgeGroup extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      skin: PropTypes.string,
      text: PropTypes.string
    })),
    selectedId: PropTypes.string,
    onSelect: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string,
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
    return map(options, badgeGroupItemBuilder);
  }

  toggleDropdown() {
    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(event) {
    const ref = ReactDOM.findDOMNode(this.badge);
    if (!ref.contains(event.target)) {
      this.setState({visible: false});
    }
  }

  handleSelect({id: selectedId}) {
    const selectedBadge = this.props.options.find(({id}) => id === selectedId);
    this.setState({selectedBadge});
    this.props.onSelect(selectedBadge);
    this.setState({visible: false});
  }

  render() {
    const {type, size, uppercase} = this.props;

    return (
      <div className={styles.container}>
        <Badge
          ref={badge => this.badge = badge}
          {...{type, size, uppercase}}
          suffixIcon={<ChevronDown/>}
          onClick={() => this.toggleDropdown()}
          skin={this.state.selectedBadge.skin}
          >
          {this.state.selectedBadge.text}
        </Badge>
        <div className={styles.dropdown}>
          <DropdownLayout
            visible={this.state.visible}
            selectedId={this.state.selectedBadge.id}
            options={this.options}
            onSelect={() => this.handleSelect()}
            isInContainer
            onClickOutside={e => this.handleOutsideClick(e)}
            />
        </div>
      </div>
    );
  }
}
