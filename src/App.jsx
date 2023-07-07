
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import './App.css'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [location, setLocation] = useState() 

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(res => setLocation(res.data))
    .catch(error => console.error(error))
  },[])

  console.log(location)
  

  return (
    <div>
      <h1>Rick And Morty App</h1>     
      <LocationInfo
      location={location}
      /> 
      <div className='resident-container'>
        {
          location?.residents.map(url => (
            <ResidentCard
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
    
  )
}

export default App
