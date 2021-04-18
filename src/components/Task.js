import { FaTimes } from 'react-icons/fa'

const Task = ( {task, deleteTask} ) => {
    return (
        <div className='task'>
            <h3 onClick={() => (deleteTask(task.id))}>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task