import {useState} from 'react';
import './App.css';

function App() {
  // VD: Counter
  // const [counter,setCounter] = useState(1)

  // const handleUpdate = () => (
  //   setCounter(counter + 1)
  // )

  // return (
  //   <div className="App">
  //       <h1>{counter}</h1>
  //       <button onClick={handleUpdate}>Increase</button>
  //   </div>
  // );

  //--------------------------------------------------------------
  // VD: TodoList

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(()=>{

    const storageJobs = JSON.parse(localStorage.getItem('jobs'));

    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev,job];

      // save to local storage
      localStorage.setItem('jobs', JSON.stringify(newJobs))

      return newJobs;
    })

    setJob('')
  }

  return (
    <div style={{padding:32}}>
      <input 
      value={job}
      onChange={e => setJob(e.target.value)} />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {
          jobs.map((job,index) =>(
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
