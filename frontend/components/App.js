import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PhotoHeader from './PhotoHeader'
import Photo from './Photo'
import PhotoFooter from './PhotoFooter'
import styled, {createGlobalStyle} from 'styled-components'

let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const GlobalStyle = createGlobalStyle`
body {
  background-color: rgba(16, 89, 180, 0.2) ;
}

`


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    #headerContainer{
      display:flex;
      flex-flow: column wrap;
      align-items: center;
      h1{
        color: blue;
      };
      #title {
        color: red;
        font-size: 30px;
        padding-bottom: 10px;
      };
      #bio {
        color: black;
        width: 70%
      }
      
      
    };
  img{
    width: 75%;
    height: 70%;
    padding: 10px;
    border-radius: 40px;
    border-style: solid;
    border-color: white;
  }

    #photoFooter{
      width: 70%;
      display:flex;
      justify-content: space-between;
      color: black;
      font-size: 20px;
      a{
        text-decoration-line: none;
        color: inherit;
      };
      a:hover{
        color: blue;
      };
    };

`

let placeHolderData = 
  {
    "date" : "Jan 1st 2024",
    "explanation" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "hdurl" : "https://static.vecteezy.com/system/resources/thumbnails/002/860/937/small_2x/space-and-planetary-background-free-vector.jpg",
    "media_type" : "image",
    "service_version" : "v1",
    "title" : "PlaceHolder Title",
    "url" : "https://media.istockphoto.com/id/1140264906/vector/vector-illustration-of-space-background.jpg?s=1024x1024&w=is&k=20&c=T7cD9gEkhHvG6diQ53v-9vhrf1rt6QxzR9aw3Bz6sbU="
  }


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
          getNasaPhotoInfo(placeHolderData)
          console.log(placeHolderData)
        })
    }
    getPhotos()
  },[]);

  

  return (
    <>
      <GlobalStyle/>
      <StyledApp>
        <PhotoHeader title={nasaPhotoInfo.title} bio={nasaPhotoInfo.explanation} />
        <Photo url={nasaPhotoInfo.url} hdurl={nasaPhotoInfo.hdurl}/>
        <PhotoFooter date={nasaPhotoInfo.date} />
      </StyledApp>
    </>
  )
}

export default App
