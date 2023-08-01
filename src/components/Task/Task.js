import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { DELETE_TASK_SUCCESS, MARK_TASK_COMPLETE_SUCCESS } from '../../redux/actions';
import { deleteTask, markTaskComplete } from '../../services/api';
import './Task.css';
const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleMarkComplete =async () => {
    await markTaskComplete(task.id);
    dispatch({ type: MARK_TASK_COMPLETE_SUCCESS, payload: task });
    toast.success(`Task "${task.title}" marked as ${task.completed ? 'incomplete' : 'complete'}`);
  };

  const handleDeleteTask = async () => {
    dispatch({type: DELETE_TASK_SUCCESS, payload: task});
    await deleteTask(task.id)
   
    toast.success(`Task "${task.title}" deleted successfully.`);
  };

  return (
    <div className="Task">
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
