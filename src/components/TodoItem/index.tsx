import React from 'react';
import { useTasks } from 'contexts/TaskProvider';

import './style.scss';

const TodoItem = ({
  id,
  name,
  hourly,
}: {
  id: number;
  name: string;
  hourly: number;
}) => {
  const { tasks, startTask } = useTasks();

  return (
    <div className="card my-2 p-2">
      <div className="row">
        <div className="col-12">
          <span className="job-title">{name}</span>
        </div>
        <div className="col-12">
          <span>Hourly ${hourly}</span>
        </div>
      </div>
      <button
        className="btn btn-info"
        onClick={() => tasks?.filter(item => item.id === id && startTask(id))}
      >
        Start Task
      </button>
    </div>
  );
};

export default TodoItem;
