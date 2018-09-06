import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeOptionBuilder} from './BadgeOptionBuilder';
import styles from './BadgeGroupLayout.scss';
import noop from 'lodash/noop';

export default class BadgeGroupLayout extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      text: PropTypes.string
    })),
    selectedId: PropTypes.string,
    isInContainer: PropTypes.bool,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    isInContainer: true,
    onSelect: noop
  };

  get options() {
    const { options } = this.props;
    return map(options, badgeOptionBuilder);
  }

  render() {
    const { selectedId, isInContainer, onSelect } = this.props;

    return (
      <div className={styles.container}>
        <DropdownLayout
          visible
          selectedId={selectedId}
          options={this.options}
          onSelect={onSelect}
          isInContainer={isInContainer}
        />
      </div>
    );
  }
}
