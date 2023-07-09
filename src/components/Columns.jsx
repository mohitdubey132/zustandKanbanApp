import React, { useState } from 'react'
import './column.css';
import Task from './Task';
import { useStore } from '../store';
import classNames from 'classnames';

const Columns = ({state}) => {
  const [text ,setText] = useState('');
  const [isOpen ,setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const tasks = useStore(store=>
    store.tasks.filter((task)=>
  (task.state=== state)));

  const setDraggedTask = useStore(store => store.setDraggedTask);
  const draggedTask = useStore(store=>store.draggedTask);
  const moveTask = useStore (store=>(store.moveTask));



  const addTask = useStore(store=>store.addTask);
  return (
    <div className={classNames('Column',{ drop: drop })} 
    onDragOver={(e) => {
      setDrop(true);
      e.preventDefault();
    }}
    onDragLeave={(e) => {
      setDrop(false);
      e.preventDefault();
    }}
    onDrop={(e) => {
      setDrop(false);
      moveTask(draggedTask, state);
      setDraggedTask(null);
    }} >
      <div className='columHeader'><p>{state}</p>
       <button onClick={()=>(setIsOpen(true))}>add</button> </div>
      
    {tasks.map((task)=>(<Task title={task.title}/>))}
{ isOpen &&
<div className='model'>
<div className='modelClaass'>
     <div ><input value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter task '/></div> 
      <button onClick={()=>{ if(text !==''){addTask(text,state);}
      setText('');
      setIsOpen(false);
      }}>submit</button>
    </div>
    </div>
  }
    </div>
  )
}

export default Columns