import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items?: Todo[]; onRemoveTodo?: (id: string) => void }> =
  (props) => {
    return (
      <ul>
        <TodoItem />
      </ul>
    );
  };

export default Todos;
