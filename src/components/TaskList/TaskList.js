import React, { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TASKS_SUCCESS } from '../../redux/actions';
import { fetchTasks } from '../../services/api';
import Task from '../Task/Task';
import './TaskList.css';
const TaskList = () => {

  const tasks = useSelector((state) => state);
  const groupId = 1; 
  const dispatch = useDispatch();
 
  useEffect(() => {
    // Fetch tasks for the current user's group
    fetchTasks(groupId).then((tasks) => {
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: tasks });
      
    });
  }, [dispatch, groupId]);
  const handleDragEnd = (result) => {
    
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const reorderedTasks = Array.from(tasks);
    const [removedTask] = reorderedTasks.splice(sourceIndex, 1);
    reorderedTasks.splice(destinationIndex, 0, removedTask);
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: reorderedTasks });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskList" direction="vertical">
        {(provided) => (
          <div
            className="TaskList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks?.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
