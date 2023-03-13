import { useState, useEffect } from 'react';

// timer to mock a backend
const wait = (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );

const defaultMessages = [
  {
    id: '1',
    direction: 'outgoing',
    timeAgo: '18 min',
    content:
      'This is an outgoing message. Typing a long message for an example.',
    platform: 'messenger',
  },
  {
    id: '2',
    direction: 'incoming',
    timeAgo: '12 min',
    content:
      'This is an incoming message. Typing a long message for an example.',
    platform: 'whatsapp',
  },
  {
    id: 'a',
    direction: 'outgoing',
    timeAgo: '8 min',
    content:
      'This is an outgoing message. Typing a long message for an example.',
    platform: 'whatsapp',
  },
  {
    id: 'b',
    direction: 'incoming',
    timeAgo: '2 min',
    content:
      'This is an incoming message. Typing a long message for an example.',
    platform: 'SMS',
  },
];

const useMessages = () => {
  const [messages, setMessages] = useState(null);

  // TODO: implement data fetching here
  useEffect(() => {
    wait(5000).then(() => setMessages(defaultMessages));
  }, []);

  return messages;
};

export default useMessages;
