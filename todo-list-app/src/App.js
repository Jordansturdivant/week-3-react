import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './ToDoList';
import TaskDetail from './TaskDetail';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <TodoList tasks={tasks} setTasks={setTasks} />
          </Route>
          <Route path="/task/:id">
            <TaskDetail tasks={tasks} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
