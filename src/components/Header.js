import Button from  './Button'

const Header = ( {showAddTask, showAdd} ) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={showAddTask} />
        </header>
    )
}

export default Header
