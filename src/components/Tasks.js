import Task from './Task'

const Tasks = ( {tasks, setTasks} ) => {

    return (
        <>
            {tasks.map( (task) => (
                <Task key={task.id} task={task}></Task>
            ) )}
        </>
    )
}

export default Tasks