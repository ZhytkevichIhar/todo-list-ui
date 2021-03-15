import React, { createContext, useState, useContext, useRef } from 'react';

interface ITask {
  id: number;
  name: string;
  status: 'todo' | 'in-progress' | 'done';
  hourly?: number;
  time?: number;
  price?: number;
  timer?: number;
}

interface ITaskContext {
  tasks: ITask[];
  createTask: (name: string, hourly: number) => void;
  startTask: (id: number) => void;
  resolveTask: (id: number) => void;
}

const initialParams = {
  tasks: [],
  createTask: (name: string, hourly: number) => {},
  startTask: (id: number) => {},
  resolveTask: (id: number) => {},
};

const TaskContext = createContext<ITaskContext>(initialParams);

const TaskProvider: React.FC = props => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [maxId, setMaxId] = useState<number>(1);
  const tasksRef = useRef<ITask[]>();

  tasksRef.current = tasks;

  const createTask: (name: string, hourly: number) => void = (name, hourly) => {
    setTasks([...tasks, { id: maxId, name, status: 'todo', hourly }]);
    setMaxId(maxId + 1);
  };

  const startTask: (id: number) => void = id => {
    const timer = setInterval(() => {
      const newTasks = tasksRef.current?.map(item => {
        return item.id === id && item.status === 'in-progress'
          ? {
              id,
              name: item.name,
              status: 'in-progress',
              hourly: item.hourly,
              time: item.time !== undefined ? item.time + 1 : 0,
              timer: item.timer,
            }
          : item;
      });
      setTasks(newTasks as ITask[]);
    }, 1000);

    const newTasks = tasks.map(item =>
      item.id === id
        ? {
            id,
            name: item.name,
            status: 'in-progress',
            hourly: item.hourly,
            time: 0,
            timer,
          }
        : item,
    );
    setTasks(newTasks as ITask[]);
  };

  const resolveTask: (id: number) => void = id => {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        clearInterval(item.timer);
        return {
          id,
          name: item.name,
          status: 'done',
          price: (
            ((item.hourly ? item.hourly : 0) * (item.time ? item.time : 0)) /
            3600
          ).toFixed(2),
        };
      } else {
        return item;
      }
    });
    setTasks(newTasks as ITask[]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, startTask, resolveTask }}
      {...props}
    />
  );
};

const useTasks: () => ITaskContext = () => {
  if (TaskContext !== undefined) {
    return useContext<ITaskContext>(TaskContext);
  }

  throw new Error('TaskContext must be used within a TaskProvider');
};

export { TaskProvider, useTasks };
