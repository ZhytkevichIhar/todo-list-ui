import React from 'react';
import { useTasks } from 'contexts/TaskProvider';
import InProgressItem from 'components/InProgressItem';

import './style.scss';

const InProgressList = () => {
  const { tasks } = useTasks();

  return (
    <div className="list-card card">
      <div className="list-title">
        <span className="item-count">
          {tasks?.filter(item => item.status === 'in-progress').length}
        </span>
        <span> In progress</span>
      </div>
      {tasks
        ?.filter(item => item.status === 'in-progress')
        .map(item => {
          return (
            <InProgressItem
              key={item.id}
              id={item.id}
              hourly={item.hourly ? item.hourly : 0}
              name={item.name}
              time={item.time ? item.time : 0}
            />
          );
        })}
    </div>
  );
};

export default InProgressList;
