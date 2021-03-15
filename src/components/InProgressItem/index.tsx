import React from 'react';
import { useTasks } from 'contexts/TaskProvider';

import './style.scss';

const InProgressItem = ({
  id,
  name,
  hourly,
  time,
}: {
  id: number;
  name: string;
  hourly: number;
  time: number;
}) => {
  const { tasks, resolveTask } = useTasks();

  const pad: (digit: number) => string = digit =>
    digit > 9 ? digit.toString() : '0' + digit;
  const toTimeFormat: (second: number) => string = second =>
    pad(Math.floor(second / 3600)) +
    ':' +
    pad(Math.floor(second / 60) % 60) +
    ':' +
    pad(second % 60);

  return (
    <div className="card my-2 p-2">
      <div className="row">
        <div className="col-12 job-title">
          <span>{`${name} ($${hourly})`}</span>
        </div>
        <div className="col-12">
          <span>{toTimeFormat(time)}</span>
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={() => tasks?.filter(item => item.id === id && resolveTask(id))}
      >
        Resolve Task
      </button>
    </div>
  );
};

export default InProgressItem;
