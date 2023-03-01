import React, { useState } from 'react';
import classNames from 'classnames';

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { text: inputValue.trim(), isDone: false }]);
      setInputValue('');
    }
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = !updatedItems[index].isDone;
    setItems(updatedItems);
  };

  const remainingTasks = items.filter((item) => !item.isDone).length;

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <p className="task-counter">
        {remainingTasks} remaining out of {items.length} tasks
      </p>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={classNames({ 'is-done': item.isDone })}
            onClick={() => handleToggleItem(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
