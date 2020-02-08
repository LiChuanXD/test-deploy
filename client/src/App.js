import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

import store from './redux/store/reduxStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App container-fluid">
        <Navbar />
        <AddTodo />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
