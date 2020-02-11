import React from 'react';
import TaskInfo from './TaskInfo';
import './Info.css';

function Info({ tasks, categories }) {
  const now = Date.now();
  const current = tasks
        .filter(t => t.type === 'task')
        .filter(t => now > t.start.getTime())
        .filter(t => now < t.end.getTime());

  return (
    <div>
      <h1>Current Tasks</h1>
      <div className="TaskContainer">
        {current.map((t, i) => <TaskInfo key={i} task={t} categories={categories} />)}
      </div>
    </div>
  );
}


export default Info;
