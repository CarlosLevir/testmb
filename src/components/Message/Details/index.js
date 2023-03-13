import * as React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.css';

function MessageDetails({ timeAgo, platform, icon, children }) {
  return (
    <div className={css.details}>
      {timeAgo && <span>{timeAgo}</span>}
      <span className={css.spacer}>{' • '}</span>
      <span className={css.platform}>{platform.toUpperCase()}</span>
      {icon && <figure className={css.icon}>{icon}</figure>}
      {children}
    </div>
  );
}

MessageDetails.propTypes = {
  timeAgo: PropTypes.string.isRequired,
  platform: PropTypes.string,
  icon: PropTypes.string,
};

export default MessageDetails;
