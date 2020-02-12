import React, { useState } from 'react';
import Gantt from './Gantt';
import Info from './Info';
import TaskInfo from './TaskInfo';
import './App.css';

function App({ tasks, style }) {
  Date.prototype.toJSON = function() {
    return this.toISOString().split('T')[0];
  };

  tasks = tasks
    .map(task => ({
      ...task,
      start: new Date(task.start),
      end: new Date(task.end),
    }))
    .map(task => ({
      ...task,
      duration: task.end.getTime() - task.start.getTime()
    }))
    .map(task => ({
      ...task,
      progress: (Date.now() - task.start.getTime()) / task.duration
    }));


  return (
    <div className="App">
      <div className="Gantt">
        <Gantt
          tasks={tasks}
          style={style}
        />
        <button onClick={() => download()}>Download Gantt</button>
      </div>
      <div className="Info">
        <Info tasks={tasks} categories={style.categories} />
      </div>
    </div>
  );
}

function download() {
  const gantt = document.getElementById('gantt');
  gantt.setAttribute("version", "1.1");
  gantt.setAttribute("xml:space", "preserve");
  gantt.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(gantt.outerHTML));
  element.setAttribute('download', 'gantt.svg');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default App;
