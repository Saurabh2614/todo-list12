import "./App.css";
import React from "react";  
import { useState } from "react";
import TodoList from "./pages/TodoList";
import TodoIonput from "./pages/TodoIonput";
import H from "./pages/H";


export default function App() {
  const [listtodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listtodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listtodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  const editListItem = (key) => {};
  

    function hi(a,b,c){
      if(a>2 && a<10){
        console.log("hii");
      }
      else if(b>a || b<20){
        console.log("hello")
      }
      else if(c>2 && c<20){
        console.log("bye");
      }
      else console.log("h");
      }
    hi(32,23,21);
  return (
    <div className="main-container">
      
      <div className="center-container">
      <H />
        <TodoIonput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        <br />
        {listtodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          );
        })}
        
      </div>
    </div>
  );
}
