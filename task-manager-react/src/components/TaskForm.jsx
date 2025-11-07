import { useState } from 'react'

export function TaskForm({onAddTask}) {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault() //stops form from refreshing page
        if (!input.trim()) return //prevents empty or whitespace input
        onAddTask(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task..."/> 
        <button type="submit">Add Task</button>
        </form>
    )
};

export default TaskForm;