import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['hi']);
  const [entry, setEntry] = useState({EntryPoint: ''})
  
  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    
    setEntry(prevState => ({
      ...prevState,
      [name]: value
    }));

  }

  const fetchData = async (url) => {

    console.log(entry);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        name: entry.EntryPoint
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])


  }

  // useEffect(() => {
  //   fetchData('/api');
  // }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
