import React from 'react';
import TodoList from 'components/TodoList';
import InProgressList from 'components/InProgressList';
import DoneList from 'components/DoneList';

import './style.scss';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <TodoList />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <InProgressList />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <DoneList />
        </div>
      </div>
    </div>
  );
};

export default App;
