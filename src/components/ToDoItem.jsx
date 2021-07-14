import React, { useState} from 'react';

const ToDoItem = (props) => {
  const { item, removeItem } = props
  const [done, setDone] = useState(false)
  console.log(done)

  const onRemove = () => {
    removeItem(item)
  }

  const onComplete = () => {
    setDone(true)
  }
  
  if (!item) return null

  return (
    <div
      className="item"
    >
      <p style={{ 
        textDecoration: done ? "line-through" : 'none',
        textDecorationColor: done ? "red" : "none",
        textDecorationThickness: done ? "2px" : "none"
      }}>{item}</p>
      <ion-icon onClick={onComplete} name="checkmark-circle-outline"></ion-icon>
      <ion-icon onClick={onRemove} name="close-circle-outline"></ion-icon>
    </div>
  )
}

export default ToDoItem;
