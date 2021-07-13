import React from 'react';

const ToDoItem = (props) => {
  const { item, removeItem } = props
  const onClick = () => {
    removeItem(item)
  }
  
  if (!item) return null

  return (
    <div>{item}<ion-icon onClick={onClick} name="close-outline"></ion-icon></div>
  )
}

export default ToDoItem;
