import React from 'react';
import DropdownLayout from '../DropdownLayout';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {badgeOptionBuilder} from './BadgeOptionBuilder';

export default class BadgeGroupLayout extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      text: PropTypes.string
    })),
    selectedId: PropTypes.string
  };
  get options() {
    const {options} = this.props;
    return map(options, badgeOptionBuilder);
  }

  render() {
    const {selectedId} = this.props;

    return (
      <div>
        <DropdownLayout
          visible
          selectedId={selectedId}
          options={this.options}
          />
      </div>
    );
  }
}
