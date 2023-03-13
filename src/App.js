import React, { useMemo } from 'react';
import Message from './components/Message';
import './styles.css';
import WhatsAppIcon from './components/Message/WhatsAppIcon';
import useEvent, { EventListener } from './useEvent';
import useMessages from './data/messages';

function App() {
  const messages = useMessages();
  const listeners = useMemo(
    () => [
      new EventListener('reply-clicked', (e) => {
        // TODO: Implement logic here to reply for a message
        console.info('reply clicked for message ' + e.messageId);
      }),
    ],
    []
  );

  const messageAction = useEvent(listeners);

  return (
    <div>
      {!messages && <>Fancy Loading Animation...</>}
      {messages &&
        messages.map((message) => (
          <Message key={message.content} direction={message.direction}>
            <Message.TextBubble>
              {message.content}
              <Message.Details
                timeAgo={message.timeAgo}
                platform={message.platform}
                icon={
                  message.platform === 'whatsapp' ? (
                    <div style={{ height: '1em', overflow: 'hidden' }}>
                      <WhatsAppIcon
                        className={
                          message.direction === 'outgoing'
                            ? 'outgoing'
                            : undefined
                        }
                      />
                    </div>
                  ) : null
                }
              />
              {message.direction === 'incoming' && (
                <Message.Actions
                  actions={messageAction}
                  messageId={message.id}
                />
              )}
            </Message.TextBubble>
          </Message>
        ))}
    </div>
  );
}

export default App;
