import React, { useState } from "react";
// import MemeDataBase from "../DataBase/Memes.jsx";

export default function Meme() {
  const [memeImage, setMemeImage] = useState(
    "https://play-lh.googleusercontent.com/Oe8twVdZFIyM5Htji5awa_wVV2IyU6O5vZKjTh4LmUbzAG2Q4iM2FBZAS_l4NazoCaY"
  );
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: memeImage,
  });

  const [apiData, setApiData] = React.useState([]);
  const [allMemeImages, setAllMemeImages] = React.useState({});

  //------------------------------------------------------------------------- FETCH SYNTAX
  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data.data.memes));
  // }, []);

  //------------------------------------------------------------------------- SYNC/AWAIT SYNTAX
  React.useEffect(() => {
    async function doIt() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setApiData(data.data.memes);
    }
    doIt();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const data = apiData;
    let randomPictureURL = Math.floor(Math.random() * apiData.length);
    let picture = data[randomPictureURL].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: picture,
    }));
  };

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main className="meme-container">
      <form className="meme-form" action="">
        <input
          className="meme-input"
          type="text"
          placeholder="Upper Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme-input"
          type="text"
          placeholder="Lower Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={handleClick} className="meme-button">
          Get a new Meme Image 🌈{" "}
        </button>
        <h3></h3>
      </form>
      <div className="meme">
        <div className="meme-image">
          <img src={meme.randomImage} alt="" width={"550px"} />
          <h2 className="top meme--text">{meme.topText}</h2>
          <h2 className="bottom meme--text">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
