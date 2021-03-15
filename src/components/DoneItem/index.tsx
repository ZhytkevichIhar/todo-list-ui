import React from 'react';

import './style.scss';

const DoneItem = ({ name, price }: { name: string; price: number }) => {
  return (
    <div className="card my-2 p-2">
      <div className="row">
        <div className="col-12 job-title">
          <span>{name}</span>
        </div>
        <div className="col-12">
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default DoneItem;
