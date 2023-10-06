import React from "react"; 
import Todo from "./Todo";

const Todolist = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo
          key={todoItem.id} // Call uuidv4() to generate a unique key
          todoItem={todoItem} 
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default Todolist;
