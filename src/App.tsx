import React, { useState } from "react";
import "./App.css";
import { Interface } from "readline";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import Todolist from "./components/Todolist";

// let name:string="Hello"
// const age:number | string ="teenn"
// const isNumber:boolean=true
// const names:string[]=["abc","absn","12","safas","dsfd"]

// type Person={
// name:string;
// age?:number;
// }
// const people:Person={
//   name:"John"
// }

// let lotofPeople:Person[]=[people,people]

// let printName:(name:string)=>void;

// // *****************Type*************

// type X ={
//   a:string;
//   b:number;
// }
// type Y = X & {
//   c:string;
//   d:number;
// }

// let y:Y={
//   a:"abfg",
//   b:23,
//   c:"add",
//   d:3

// }

// // *****************Interface*************
// interface Man {
//   name:string;
//   age:number;

// }

// interface Guy extends Man{
//   profession:string;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskifier</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
