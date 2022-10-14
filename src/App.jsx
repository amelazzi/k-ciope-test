import { BaseURL } from './api/api'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [users, setUsers] = useState([])

  const download = async () => {
    try{
      const response = await axios.get(`${BaseURL}/users`)
      setUsers(response["data"])
    }catch (e){
      console.log("Oops Erreur: ", e)
    }
  }

  useEffect(() => {
    setUsers(users);
  }, [users]);
  
  return (
    <div className="App">
        <button onClick={download}> Click me </button>
        <div>
          {users?.map((user, key) => 
            <p key={key}> {user.name} </p>
          )}
        </div>
    </div>
  )
}

export default App
