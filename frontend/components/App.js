import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PhotoHeader from './PhotoHeader'
import Photo from './Photo'
import PhotoFooter from './PhotoFooter'

let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
const [nasaPhotoInfo, getNasaPhotoInfo] = useState([]);

  useEffect(() => {
    console.log('Fetch Initiated');
    function getPhotos() {
      axios.get(url)
        .then(res => {
          let nasaRes = res.data
          console.log(nasaRes)
          getNasaPhotoInfo(nasaRes)
        })  
        .catch(err => {
          console.log(err.message)
        })
    }
    getPhotos()
  },[]);

  

  return (
    <div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PhotoHeader />
      <Photo />
      <PhotoFooter />
    </div>

  )
}

export default App
