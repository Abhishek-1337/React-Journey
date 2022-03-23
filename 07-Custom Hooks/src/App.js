import React, { useEffect, useState } from 'react';
import useHttp from './components/hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';



function App() {
  
  const [tasks, setTasks] = useState([]);

  const {isLoading, error,  sendRequest: fetchTasks} = useHttp();
  

  useEffect(() => {
    const taskHandler = (data) => {
      const loadedTasks = [];
  
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTasks({url: 'https://react-http-6b4a6.firebaseio.com/tasks.json'}, taskHandler);
  },[fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
