import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ADD_TASK_SUCCESS } from '../../redux/actions';
import { addTask } from '../../services/api';
import './TaskForm.css';
const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!title || !description) {
      toast.error('Please fill in both title and description.');
      return;
    }
    const newTask = {
      title,
      description,
      id: `${Date.now()}`,
      completed: false,
      userId: 1, // Replace with the current user's ID
      groupId: 1, // Replace with the current user's groupId
    };
  
    const response = await addTask(newTask);
    dispatch({ type: ADD_TASK_SUCCESS, payload: response });
    toast.success('Task added successfully!');
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
