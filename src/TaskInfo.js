import React from 'react';
import './TaskInfo.css';

function TaskInfo({ task, categories }) {
  const readableDate = date => {
    const d = date.toDateString().split(' ').slice(0, 3);
    return d[0] + ' ' + d[2] + ' ' + d[1];
  };

  const start = readableDate(task.start);
  const end = readableDate(task.end);

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
        <div className="StartEnd">
          <div className="StartEnd-start">{start}</div>
          <div className="StartEnd-arrow">to</div>
          <div className="StartEnd-end">{end}</div>
        </div>
        <div>
          Remaining: <b>{((1-task.progress)*task.duration / (1000*60*60*24)).toFixed(1)} days</b>
        </div>
      </div>
    </div>
  );
}

export default TaskInfo;

