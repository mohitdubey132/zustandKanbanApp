import classNames from 'classnames';
import './task.css'
import { useStore } from '../store';


export default function Task ({title}){
    // const status ='ONGOING';
    const task = useStore((store)=>(store.tasks.find((task)=>(task.title === title ))))
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const deleteTask = useStore((store)=>(store.deleteTask))
    return(
        <div className="task" draggable={true}  onDragStart={() => setDraggedTask(task.title)} >
            <div>{task.title}</div>
            <div className='buttonWrapper'>
                <div>
                   <button onClick={()=>(deleteTask(task.title))} >remove</button>
                    </div>
                <div className={classNames('status',task.state)}>{task.state}</div>
                </div></div>

    )
}