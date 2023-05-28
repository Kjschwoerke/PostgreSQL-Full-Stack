import {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});

  const getData = async (url) => {
   return fetch (url)
    .then(res => res.json())

    /**
     * If not returning the promise use this and leave of the .then statement in the useEffect
     * 
     * fetch (url)
     *  .then(res => res.json())
     *  .then(user => setUser(user))
     */
  }

  useEffect(() => {
   getData('http://localhost:5000/users/userdata')
    //remove the .then function if not returning promise in getData()
    .then(res => setUser(res))
  }, [])

  return (
    <div className="App">
     <h1>Data from Backend</h1>
     <p>The user information for: <span style={{fontWeight: 700}}>{user.first_name} {user.last_name}</span>, is from the backend.</p>
     <p>They are <span style={{fontWeight: 700}}>{user.age}</span> years old.</p>
    </div>
  );
}

export default App;
