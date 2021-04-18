import Task from './Task'

const Tasks = ( {tasks, setTasks, deleteTask, toggleReminder} ) => {

    return (
        <>
            {tasks.map( (task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}></Task>
            ) )}
        </>
    )
}

export default Tasks