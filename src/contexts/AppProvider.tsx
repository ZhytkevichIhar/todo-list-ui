import React from 'react';
import { TaskProvider } from './TaskProvider';

const AppProvider = ({ children }: { children: JSX.Element }) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default AppProvider;
