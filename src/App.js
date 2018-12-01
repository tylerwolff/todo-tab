import React, { useState, useReducer, useEffect } from 'react';
import { format } from 'date-fns';
import reducer from './reducer';
import Todos from './Todos';
import ProgressBar from './ProgressBar';
import './App.css';

const hasChromeSync = !!window.chrome.storage;

const loadTodos = () => {
  if (hasChromeSync) {
    return [];
  } else {
    return JSON.parse(window.localStorage.getItem('todos')) || [];
  }
};

export default props => {
  const [state, dispatch] = useReducer(reducer, { todos: loadTodos() });
  const [time, setTime] = useState(new Date());
  const todos = state.todos;

  // Actions
  const addTodo = todo => {
    dispatch({ type: 'addTodo', todo });
  };

  const updateTodo = (todo, value) => {
    dispatch({ type: 'updateTodo', todo, value });
  };

  const removeTodo = todo => {
    dispatch({ type: 'removeTodo', todo });
  };

  const toggleTodo = todo => {
    dispatch({ type: 'toggleTodo', todo });
  };

  // TODO: manage bookmarks
  // window.chrome.bookmarks.getRecent(10, b => console.log(b));

  // async call to chrome.storage.sync to load initial todos, will only run once
  useEffect(() => {
    if (hasChromeSync) {
      window.chrome.storage.sync.get(['todos'], result => {
        dispatch({ type: 'resetTodos', todos: result.todos || [] });
      });
    }
  }, []);

  useEffect(
    () => {
      document.title = `${todos.length} tasks today`;
    },
    [todos]
  );

  useEffect(
    () => {
      // if running as a chrome extension
      if (hasChromeSync) {
        // note: this is async
        window.chrome.storage.sync.set({ todos });
      } else {
        window.localStorage.setItem('todos', JSON.stringify(todos));
      }
    },
    [todos]
  );

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    },
    [time]
  );

  const done = todos.filter(t => t.isDone);
  const progress = (done.length / todos.length) * 100;

  return (
    <div className="App">
      <ProgressBar progress={progress} />
      <h1 className="App__header">{format(time, 'dddd HH:mm')}</h1>
      <Todos
        todos={todos}
        onAdd={addTodo}
        onUpdate={updateTodo}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </div>
  );
};
