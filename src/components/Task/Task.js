import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TASK, MARK_COMPLETE } from '../../redux/actions';
import './Task.css';
const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleMarkComplete = () => {
    dispatch({ type: MARK_COMPLETE, payload: task.id });
  };

  const handleDeleteTask = () => {
    dispatch({ type: DELETE_TASK, payload: task.id });
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleMarkComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
