import * as React from 'react';
import PropTypes from 'prop-types';
import TextBubble from './TextBubble';
import Details from './Details';
import Actions from './Actions';
import classNames from 'classnames';
import { Context } from './../../MessageContext';
import css from './styles.module.css';
import MessageDetails from './Details';

function Message({ direction, children, avatar }) {
  const contextValue = React.useMemo(
    () => ({
      direction,
    }),
    [direction]
  );

  return (
    <Context.Provider value={contextValue}>
      <div
        className={classNames(
          css.message,
          direction === 'outgoing' && css.outgoing
        )}
      >
        {avatar && <div className={classNames(css.avatar)}>{avatar}</div>}

        {!avatar && <div class={classNames(css.avatar, 'undefined')} />}

        {children}
      </div>
    </Context.Provider>
  );
}

Message.propTypes = {
  avatar: PropTypes.string,
  direction: PropTypes.oneOf(['incoming', 'outgoing']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Message;

Message.TextBubble = TextBubble;
Message.Details = MessageDetails;
Message.Actions = Actions;
