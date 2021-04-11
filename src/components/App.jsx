import React, { useState } from "react";

const list = [];

function App() {
  const [item, setItem] = useState("");

  function saveItem(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    list.push(item);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={saveItem} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
