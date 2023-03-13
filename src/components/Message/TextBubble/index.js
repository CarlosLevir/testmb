import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useMessageContext } from '../../../MessageContext';
import css from './styles.module.css';

function TextBubble({ className, children }) {
  const { direction } = useMessageContext();

  return (
    <div
      className={classnames(
        css.messageBubble,
        direction === 'incoming' ? css.incoming : css.outgoing,
        className
      )}
    >
      {children}
    </div>
  );
}

TextBubble.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TextBubble;
