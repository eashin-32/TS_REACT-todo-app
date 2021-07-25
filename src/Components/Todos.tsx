import React, { useState } from 'react';
import Contact from './Contact';

interface ITodo{
    task: string,
    day: number
}


const Todos = () => {
    const [Task, setTask] = useState<ITodo>({} as ITodo)
    const [TaskList, setTaskList] = useState<ITodo[]>([])
    
    const handleSubmit = () => {
       setTaskList([...TaskList, Task])
      setTask({
          task:'',
          day: NaN
       })
    }

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setTask({...Task, [e.target.name] : e.target.value})
    }
    return (
        <div>
            <h1>Todo List</h1>
           <form onSubmit={handleSubmit}>
           <input 
                type="text"  
                name='todo' 
                value={Task.task}
                onChange={handleInput}
                placeholder='Add a Task'
            />
            <input 
                type="number"
                name='day' 
                placeholder='Day'
                value={Task.day}
                onChange={handleInput}
            />
            <button type='submit'>Add</button>
           </form>
            {
                TaskList.map(task => <Contact Task={task.task} Day={task.day}/>)
            }
        </div>
    );
};

export default Todos;