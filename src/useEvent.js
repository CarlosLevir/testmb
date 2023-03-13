import { useRef, useEffect, useMemo } from 'react';

export class EventListener {
  constructor(type, listener) {
    this._type = type;
    this._listener = listener;
  }
}

const useEvent = (listeners = []) => {
  let messageAction = useRef();

  if (!messageAction.current) {
    messageAction.current = new EventTarget();
  }

  useEffect(() => {
    listeners.forEach((eventListener) => {
      messageAction.current.addEventListener(
        eventListener._type,
        eventListener._listener
      );
    });

    return () => {
      // unregister event listeners
      listeners.forEach(([type, listener]) => {
        messageAction.current.removeEventListener(type, listener);
      });
    };
  }, [listeners]);

  return messageAction.current;
};

export default useEvent;
