import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <p>{task.text}</p>
    </div>
  );
};

export default TaskDetail;
