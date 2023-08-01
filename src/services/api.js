// services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTasks = async (groupId) => {
  const response = await api.get(`/tasks?groupId=${groupId}`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const markTaskComplete = async (taskId) => {
  const response = await api.patch(`/tasks/${taskId}`, { completed: true });
  return response.data;
};

export const deleteTask = async (taskId) => {
  await api.delete(`/tasks/${taskId}`);
};

export default api;
