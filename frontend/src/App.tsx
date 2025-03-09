import { useState, useEffect } from 'react'
import './App.css'

const url = `https://cloud-tasker-325.azurewebsites.net/`;

function App() {
  const [msg, setMsg] = useState("Loading..")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) 
          throw new Error("Network response was not ok");

        const data = await response.text(); 

        setMsg(data); 
      } 
      catch (error) {
        console.error("Fetch error:", error);
        setMsg("Failed to load message");
      }
    }

    fetchData();
  });

  return (
      <div>Message {msg}</div>
  )
}

export default App
