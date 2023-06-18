import React, { useState } from "react";
import TodoList from "./TodoList";

const Home = (props) => {
    const [enteredUserTask, setEnteredUserTask] = useState("");
    const [error, setError] = useState(); 
    const [taskList, setTaskList] = useState([]);

    const userTaskChangeHandler = (event) => {
        setEnteredUserTask(event.target.value);
    }

    const addUserHandler = (event) => { 
        event.preventDefault();
        if(enteredUserTask.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Empty task cannot be added into list'
            });
            return;
        }    
        setTaskList((prevUsersList) => {
            return [...prevUsersList, {name: enteredUserTask, id: Math.random().toString()}];
        });
        setEnteredUserTask('');
    };
    
    const delUserHandler = (id) => {
      console.log('del id', id)
      var userTask = [...taskList];
      const index = userTask.findIndex(o=>o.id===id);
      console.log("INDEX ", index)
      userTask.splice(index,1);
      setTaskList(userTask)
    }
    

    return (
        <div>
            
            <h1 className="text-center">React Dashboard</h1>
            <div>
                <b>My Todo List</b>
            </div>
            <div>
                <form onSubmit={addUserHandler}>
                  <label htmlFor='addtask'>Add Task</label>
                  <input id='addtask' type='text' value={enteredUserTask} onChange={userTaskChangeHandler}/>&nbsp;
                  <button className="btn btn-success" type='submit'>Add User</button>
                </form>
            </div>
            <TodoList tasks={taskList} deleteTask={delUserHandler}/>
        </div>
    );
}

export default Home;