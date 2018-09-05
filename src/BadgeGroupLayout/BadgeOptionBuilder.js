import React from 'react';
import styles from './BadgeOption.st.css';
import PropTypes from 'prop-types';

const badgeOption = ({text, skin}) => (
  <div {...styles('root', {skin}, {skin})}>
    <div className={styles.marker}/>
    <span className={styles.label}>{text}</span>
  </div>
);

badgeOption.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired
};

export const badgeOptionBuilder = ({id, text, skin}) => ({
  id,
  value: badgeOption({text, skin})
});
