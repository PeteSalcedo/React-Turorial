import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTasks] = useState([
  {
  id:1,
  text:'Doctors Appo',
  day:'Fed 5th at 3',
  reminder:true,
},
{
  id:2,
  text:'Doctors Appo 2',
  day:'Fed 25th at 3',
  reminder:true,
},{
  id:3,
  text:'Doctors Appo',
  day:'Fed 35th at 3',
  reminder:true,
},
]) 
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 200) + 2
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
  
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder:!task.reminder}:task
    )
  )
}
  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>
    ) : ('No tasks left to show')}
    </div>
  );
}

export default App;

