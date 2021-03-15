import React from 'react';
import { useTasks } from 'contexts/TaskProvider';
import DoneItem from 'components/DoneItem';

import './style.scss';

const DoneList = () => {
  const { tasks } = useTasks();
  return (
    <div className="list-card card">
      <div className="list-title">
        <span className="item-count">
          {tasks?.filter(item => item.status === 'done').length}
        </span>
        <span> Done</span>
      </div>
      {tasks
        ?.filter(item => item.status === 'done')
        .map(item => (
          <DoneItem
            key={item.id}
            name={item.name}
            price={item.price ? item.price : 0}
          />
        ))}
    </div>
  );
};

export default DoneList;
