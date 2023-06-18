import React from 'react';

const TodoList = (props) => {
    const { deleteTask, tasks } = props;
  return (
    <div>
    <ul>
        {tasks.map((user) => ( 
        <li key={user.id}>
            {user.name}&nbsp;
            <button className="btn btn-danger" onClick={() => (deleteTask(user.id))}> Delete</button>
        </li>        
        ))}
    </ul>
    </div> 
  )
}

export default TodoList