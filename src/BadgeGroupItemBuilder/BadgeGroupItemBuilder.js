import React from 'react';
import styles from './BadgeGroupItem.st.css';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const badgeOption = props => {
  const {skin, text} = props;
  return (<div {...styles('root', {skin}, props)}>
    <div className={styles.marker}/>
    <span className={styles.label}>
      <Text
        size="small"
        skin="standard"
        tagName="span"
        weight="normal"
        >
        {text}
      </Text>
    </span>
  </div>);
};

badgeOption.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired
};

export const badgeGroupItemBuilder = ({id, text, skin}) => ({
  id,
  value: badgeOption({text, skin})
});
