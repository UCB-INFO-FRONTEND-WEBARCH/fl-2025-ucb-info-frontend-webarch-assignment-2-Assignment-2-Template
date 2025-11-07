import TaskItem from './TaskItem'

export function TaskList({tasks, onToggle, onDelete}) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={() => onToggle(task.id)} onDelete={() => onDelete(task.id)} />
      ))}
    </ul>
  )
}

export default TaskList;