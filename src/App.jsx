
import { useEffect, useState } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import './App.css'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {
  const [location, setLocation] = useState() 
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    axios
    .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(res => {
      setLocation(res.data)
      setHasError(false)
    })
    .finally(() => {
      setIsLoading(false)
    })
    .catch(error => {  
      console.error(error)
      setHasError(true)
    })
  },[idLocation])
  return (
    <div>
      <img className='banner__img' src="./src/assets/image.png" alt=""></img>      
      <FormLocation 
        setIdLocation={setIdLocation}
        /> 
        {
          isLoading
          ? ( <h1>Loading...</h1> )
          : (
            hasError
            ? ( <h1>❌ Hey! you must provide an id from 1 to 126 ❌</h1 > )
            : ( 
              <>
                <LocationInfo
                location={location}
                /> 
                <div className='resident-container'>
                  {
                    location?.residents?.map(url => (
                      <ResidentCard
                        key={url}
                        url={url}
                      />
                    ))
                  }
                </div>            
              </>
            )            
          )
        }   
    </div>
  )
}

export default App
