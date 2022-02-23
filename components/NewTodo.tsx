import React, { useRef, useContext } from "react";
// import { TodosContext } from "../store/todos-context";

interface I_Props_NewTodo {
  onAddTodo?: (text: string) => void;
}

const NewTodo: React.FC<I_Props_NewTodo> = (props) => {
  return (
    <form>
      <label htmlFor=""></label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
