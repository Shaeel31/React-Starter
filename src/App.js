import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    fetchTasks();
  }, []);

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((item) => (item.id === id ? { ...item, reminder: !item.reminder } : item)))
  }

  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    let payload = { id, ...task }
    addNewTask(payload)
  }

  const fetchTasks = async () => {
    let url = "http://localhost:5000/tasks";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let tasks = await res.json()
    setTask([...tasks])
  }

  const addNewTask = async (data) => {
    debugger
    let url = "http://localhost:5000/tasks";
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => setTask([...tasks, data]));
  }

  const deleteTask = async (id) => {
    debugger
    let url = `http://localhost:5000/tasks/${id}`;
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => setTask([...tasks.filter((item) => item.id !== id)]));
  }


  return (


    <div className="container">
      <Header title="Task Tracker" showAddTask={showAddTask} setShowAddTask={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} /> : 'No tasks to show'}
      {/* <Route path="/about" component={About} /> */}
      <Footer />
    </div>

  );
}

export default App;
