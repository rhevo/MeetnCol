import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

