import React, { useState } from 'react';
import { useTasks } from 'contexts/TaskProvider';
import TodoItem from 'components/TodoItem';

import './style.scss';
import TaskDetailsModal from 'components/TaskDetailsModal';

const TodoList = () => {
  const { tasks } = useTasks();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const showTaskDetails = () => setIsOpen(true);
  const closeTaskDetails = () => setIsOpen(false);

  return (
    <div className="list-card card">
      <div className="list-title">
        <span className="item-count">
          {tasks?.filter(item => item.status === 'todo').length}
        </span>
        <span> To-dos</span>
      </div>
      {tasks
        ?.filter(item => item.status === 'todo')
        .map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            hourly={item.hourly ? item.hourly : 0}
          />
        ))}
      <button
        className="btn btn-outline-primary mx-auto mt-4 px-1 py-0"
        onClick={showTaskDetails}
      >
        <i className="fa fa-plus"></i> Create Task
      </button>
      <TaskDetailsModal isOpen={modalIsOpen} closeModal={closeTaskDetails} />
    </div>
  );
};

export default TodoList;
