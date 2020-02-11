import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gantt from './Gantt';
import * as serviceWorker from './serviceWorker';

fetch('/gantt.json')
  .then(res => res.json())
  .then(tasks => {
    ReactDOM.render(Gantt(tasks, {
      showNow: true,
      weekBarColor: "#EEEFF1",
      weekBarTextColor: "#666",
      taskTextColor: "#000303",
      categories: {
        deadlines: "#61CFED",
        goals: "#5CCE99",
        other: "#7D9CF9",
      }
    }), document.getElementById('root'));
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
