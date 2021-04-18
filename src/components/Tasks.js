import Task from './Task'

const Tasks = ( {tasks, setTasks, deleteTask} ) => {

    return (
        <>
            {tasks.map( (task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask}></Task>
            ) )}
        </>
    )
}

export default Tasks