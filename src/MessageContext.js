import { createContext, useContext } from 'react';

export const Context = createContext({
  direction: 'incoming',
});

export const useMessageContext = () => useContext(Context);
