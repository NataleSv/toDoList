// import Counter from './Counter';
// import Item from './Item';
import './App.css';
import {useState} from 'react';
import Task from './Task';
import Form from './Form';

function App() {
  let [tasks, setTasks] = useState([
    {
      text: 'Выучить JavaScript',
      done: false
    },
    {
      text: 'Познакомиться с React',
      done: false
    },
    {
      text: 'Устроиться на работу',
      done: false
    }
  ]);


  let addTask = text => {
    let newTask = [...tasks, {text}];
    setTasks(newTask);
  }


  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = !newTask[index].done;
    setTasks(newTask);
  }
  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index,1);
    setTasks(newTask);
  }

  return (
    <div>
      <div className="task-list">
        {
          tasks.map((task,index)=>(
            <Task 
            key={index}
            task={task}
            index={index}
            doneTask={doneTask}
            deleteTask={deleteTask}
            />
          ))
        }
        <Form addTask={addTask} />
      </div>

      {/* <Counter />
      <Item />
       */}
    </div>
  );
}

export default App;
