import React from 'react';
import './TaskInfo.css';

function TaskInfo({ task, categories }) {
  return (
    <div className="TaskInfo">
      <div className="TaskInfo-header">
        <div className="Progress">
          <div className="Progress-container">
            <div className="Progress-bar" style={{ width: (100 * task.progress)+"%", backgroundColor: categories[task.category] }}></div>
            <div className="Progress-label">
              {task.name}
            </div>
          </div>
        </div>
      </div>
      <div className="TaskInfo-body">
        <div>
          Category: {task.category}
        </div>
      </div>
    </div>
  );
}

export default TaskInfo;

