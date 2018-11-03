import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Todos from './Todos';
import './App.css';

const hasChromeSync = !!window.chrome.storage;

const initialTodos = () => {
  if (hasChromeSync) {
    return [];
  } else {
    return JSON.parse(window.localStorage.getItem('todos')) || [];
  }
};

export default props => {
  const [todos, setTodos] = useState(initialTodos());
  const [time, setTime] = useState(new Date());

  // async call to chrome.storage.sync to load initial todos, will only run once
  useEffect(() => {
    if (hasChromeSync) {
      window.chrome.storage.sync.get(['todos'], result => {
        setTodos(result.todos || []);
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

  return (
    <div className="App">
      <h1 className="App__header">{format(time, 'dddd HH:mm')}</h1>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};
