export function TaskItem({task, onToggle, onDelete}) {
    return (
        <li><label className="container"> 
            {task.text}
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)}/>
            <span className="checkmark"></span>
            <button className="delete-button" onClick={() => onDelete(task.id)}> &times; </button>
        </label>
        </li>
    )
};

export default TaskItem;