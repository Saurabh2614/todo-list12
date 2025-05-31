import React from "react";

export default function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <div className="s">
        <span className="icons">
          <i
            className="fa-solid fa-pen icon-edit"
            onClick={(e) => {
              props.editItem(props.index);
            }}
          >
            {" "}
          </i>
        </span>
        <span className="icons">
          <i
            className="fa-regular fa-trash-can icon-delete"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </div>
    </li>
  );
}
