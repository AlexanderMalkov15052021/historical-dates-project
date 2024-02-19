'use client';

import { Provider } from 'react-redux';
import { setupStore } from './store';
import { ReactNode } from 'react';

const store = setupStore();

type Props = {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
