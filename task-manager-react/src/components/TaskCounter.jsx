export function TaskCounter({tasks, filteredTasks}) {
    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length
    const active = total - completed
    const filtered = filteredTasks.length
    return (
        <div className="task-counter">
            Total: {total}, Active: {active}, Completed: {completed} <br/>
            {filtered} of {total} tasks shown
        </div>
    )
};

export default TaskCounter;