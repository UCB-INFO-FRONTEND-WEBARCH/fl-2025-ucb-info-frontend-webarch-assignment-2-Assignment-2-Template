import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (taskText) => {
    // Add new task to state
    const newTask = {
      id: crypto.randomUUID(), 
      text: taskText, 
      completed: false
    }
    setTasks([...tasks, newTask])
  };
  
  const toggleTask = (id) => {
    // Toggle task completion
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  };
  
  const deleteTask = (id) => {
    // Remove task from state
    setTasks(tasks.filter(task => task.id !== id))
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const handleClick = () => {
    setTasks([...tasks, `New Task ${tasks.length + 1}`])
  }

  const handleChange = (event)  => {
    const inputValue = event.target.value;
    console.log("Input changed:", inputValue);
  }

  return (
    <div className="App">
      <header id ="main-header"> 
          <div className="site-header">
              <img className="menu-icon" src={menuIcon} alt="menu"/>
              <form>
                  <label className="search-container">
                      <img className="search-icon" src={searchIcon} alt="search"/>
                      <input className="search-input" type="search" placeholder="Quick Find"/>
                  </label>                    
              </form>
              <div className="site-header__status">
                  <img className="check-icon" src={checkIcon} alt="check"/>
                  <span>{tasks.filter(task => task.completed).length} / {tasks.length}</span>
              </div>
          </div>
      </header>
      <section className="layout">
        <main className="site-main">
          <aside className="navbar">
              <ul className="navbar-list">
                  <li>
                      <label htmlFor="tab-inbox">
                      <img className="inbox-icon" src={inboxIcon} alt="Inbox"/> <b>Inbox</b> 5
                      </label>
                  </li>
                  <li>
                      <label htmlFor="tab-today">
                      <img className="calendar-icon" src={calendarIcon} alt="Today"/> <b>Today</b> 5
                      </label>
                  </li>
                  <li>
                      <label htmlFor="tab-upcoming">
                      <img className="upcoming-icon" src={upcomingIcon} alt="Upcoming"/> <b>Upcoming</b>
                      </label>
                  </li>
              </ul>
          </aside>
          <section className="main-content">
              <section id ="tab-inbox" className="inbox-main-content">
                  <h1>Inbox</h1>
              <ul className="inbox-list">
                  <TaskForm onAddTask={addTask} />
                  <TaskCounter tasks={tasks} filteredTasks={filteredTasks}/>
                  <div className="filter-buttons">
                    <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}> All </button>
                    <button type="button" className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}> Active </button>
                    <button type="button" className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}> Completed </button>
                  </div>
                  <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask}/>
              </ul>
              </section>
              <section id ="tab-today" className="today-main-content">
                  <h1>Today</h1>
              <ul className="today-list">
              </ul>
              </section>
              <section id ="tab-upcoming" className="upcoming-main-content">
                  <h1>Upcoming</h1>
              <ul className="upcoming-list">
              </ul>
              </section>
          </section>
        </main>
      </section>
    </div>
  )
}

export default App
