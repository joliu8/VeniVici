import { useState } from 'react'
import './App.css'
import CatInfo from './components/CatInfo.jsx';
import Gallery from './components/Gallery.jsx';
import BanInfo from './components/BanInfo.jsx';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {

  const [currImage, setCurrentImage] = useState(null);
  const [prevImages, setPrevImages] = useState([]);
  const [breedInfo, setBreedInfo] = useState(null);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const submitClicked = () => {
    makeQuery();

  };

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=true&include_breeds=1`;
    callAPI(query).catch(console.error);
    // console.log(21);

  };

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    // console.log(json);
    // console.log(json[0].breeds[0].name);

    if (json[0].url == null) {
      alert("Oops! Something went wrong with that query, let's try again!")
    }
    else if (bannedAttributes.includes(json[0].breeds[0].origin) || bannedAttributes.includes(json[0].breeds[0].name)) {
      console.log("refresh");
      makeQuery();

    }
    else {
      setCurrentImage(json[0].url);
      setPrevImages((images) => [...images, json[0].url]);
      setBreedInfo(json[0].breeds);
      // reset();
    }

  };

  const attributeClicked = (event) => {
    const clickedAttribute = event.target.innerText;
    setBannedAttributes((att) => {
      if (!att.includes(clickedAttribute)) {
        return [...att, clickedAttribute];
      }
      return att;
    });
  };

  const banClicked = (event) => {

    console.log(62);

    const itemToRemove = event.target.innerText;
    const removedBan = bannedAttributes.filter(item => item !== itemToRemove);
    setBannedAttributes((att) => removedBan);

    console.log({ bannedAttributes });
  }


  return (
    <>
      <h1> Veni Vici</h1>
      <h2> Who doesn't like cute cat photos?</h2>
      <button type="submit" className="submitButton" onClick={submitClicked}>
        Show me a cat!
      </button>


      <div className="info">

        <div className="gallery-info">
          <Gallery images={prevImages} />
        </div>

        <div className="cat-info">
          <CatInfo
            onBan={attributeClicked}
            image={currImage}
            breedInfo={breedInfo} />
        </div>

        <div className="ban-info">
          <BanInfo
            bannedAttributes={bannedAttributes}
            removeBanned={banClicked} />
        </div>


      </div>



    </>
  )
}

export default App
