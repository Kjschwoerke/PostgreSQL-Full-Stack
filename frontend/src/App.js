import {useEffect, useState} from 'react';
import { TutorialsComponent } from './components/tutorialComponent.js' 

const App = () => {
  const [tutorials, setTutorials] = useState([]);

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
   getData('http://localhost:5000/api/tutorials')
    //remove the .then function if not returning promise in getData()
    .then(res => setTutorials(res))
  }, [])

  return (
    <div className="App">
     <h1>Data from Backend</h1>
      <TutorialsComponent tutorials={tutorials} />
    </div>
  );
}

export default App;
