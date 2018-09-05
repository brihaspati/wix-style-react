import React from 'react';
import styles from './BadgeOption.st.css';

const badgeOption = ({text, skin}) => (
  <div>
    <div {...styles('root', {}, {skin})}/>
    <span className={styles.label}>{text}</span>
  </div>
);

export const badgeOptionBuilder = ({id, text, skin}) => ({
  id,
  value: badgeOption({text, skin})
});
