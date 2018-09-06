import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeOptionBuilder} from './BadgeOptionBuilder';
import styles from './BadgeGroup.scss';
import noop from 'lodash/noop';

export default class BadgeGroup extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      text: PropTypes.string
    })),
    selectedId: PropTypes.string,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    onSelect: noop
  };

  get options() {
    const { options } = this.props;
    return map(options, badgeOptionBuilder);
  }

  render() {
    const { selectedId, onSelect } = this.props;

    return (
      <div className={styles.container}>
        <DropdownLayout
          visible
          selectedId={selectedId}
          options={this.options}
          onSelect={onSelect}
          isInContainer={true}
        />
      </div>
    );
  }
}
