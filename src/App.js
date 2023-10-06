import React, { useState } from 'react';
import Form from "./Components/Form";
import Todolist from './Components/Todolist';
import Header from "./Components/Header";

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Form
        todo={todo}
        setTodo={setTodo} 
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Todolist setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
