import React from 'react';
import css from './styles.module.css';

class ReplyClickedEvent extends Event {
  constructor(messageId) {
    super('reply-clicked');
    this.messageId = messageId;
  }
}

function ActionsRow({ actions, messageId, ...props }) {
  const handleReplyClicked = (e) => {
    actions.dispatchEvent(new ReplyClickedEvent(messageId));
  };

  return (
    <div className={css.actions} {...props}>
      <button onClick={handleReplyClicked} className={css.replyButton}>
        ↩️
      </button>
    </div>
  );
}

export default ActionsRow;
