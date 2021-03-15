import { useTasks } from 'contexts/TaskProvider';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './style.scss';

const TaskDetailsModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const { createTask } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState<string>();
  const [newTaskHourly, setNewTaskHourly] = useState<string>();

  useEffect(() => {
    if (isOpen === true) {
      setNewTaskTitle('');
      setNewTaskHourly('');
    }
  }, [isOpen]);

  const validateHourlyText = (s: string) => {
    const rgx = /^[0-9]*\.?[0-9]*$/;
    if (s.match(rgx)) {
      setNewTaskHourly(s);
    }
  };

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Task details</Modal.Title>
        <button className="btn" onClick={closeModal}>
          <i className="fa fa-close"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-3">
            <label>Title: </label>
          </div>
          <div className="col-9">
            <input
              className="form-control mx-auto"
              type="text"
              value={newTaskTitle || ''}
              onChange={e => setNewTaskTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <label>Hourly rate($): </label>
          </div>
          <div className="col-9">
            <input
              className="form-control mx-auto"
              type="text"
              maxLength={5}
              value={newTaskHourly || ''}
              onChange={e => validateHourlyText(e.target.value)}
              required
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-danger my-auto px-3 py-1"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="btn btn-primary my-auto px-3 py-1"
          onClick={() => {
            newTaskTitle && createTask(newTaskTitle, Number(newTaskHourly));
            closeModal();
          }}
        >
          Create
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDetailsModal;
