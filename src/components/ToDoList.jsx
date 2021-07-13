import React, {useState, useEffect} from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([''])
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, value])
    setValue('')
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const removeItem = (item) => {
    let items = toDoList
    let index = items.indexOf(item)
    if (index !== -1) {
      items.splice(index, 1)
      setToDoList(items)
    }
  }

  useEffect(() => {console.log('updated')},[toDoList])

  return (
    <div className="container">
      <h1>To Do:</h1>
      {toDoList.length < 2 && 
        <p>Add item to begin list</p>
      }
      {toDoList.map(item => {return <ToDoItem item={item} removeItem={removeItem} />})}
      <form className="form" onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} placeholder="New Todo" /> 
      </form>
    </div>
  )
}

export default ToDoList;
