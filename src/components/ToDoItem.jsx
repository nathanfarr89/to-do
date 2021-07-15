import React, { useState} from 'react';

const ToDoItem = (props) => {
  const { item, removeItem } = props
  const [done, setDone] = useState(false)
  console.log(done)

  const onRemove = () => {
    removeItem(item)
  }

  const onComplete = () => {
    setDone(!done)
  }
  
  if (!item) return null

  return (
    <div
      className="item"
    >
      <div style={{ 
        textDecoration: done ? "line-through" : 'none',
        textDecorationColor: done ? "red" : "none",
        textDecorationThickness: done ? "2px" : "none"
      }}>{item}</div>
      <div>
        { !done && <ion-icon onClick={onComplete} name="checkmark-circle-outline"></ion-icon>}
        { done && <ion-icon onClick={onComplete} name="arrow-undo-circle-outline"></ion-icon>}
        <ion-icon onClick={onRemove} name="close-circle-outline"></ion-icon>
      </div>
    </div>
  )
}

export default ToDoItem;
