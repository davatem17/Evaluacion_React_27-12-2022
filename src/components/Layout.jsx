import React, { useEffect, useState } from "react";
import GifCard from "./GifCard";
import InputAgregar from "./InputAgregar";
import Axios from "axios";
import axios from "axios";

const Layout = () => {
  const [gif, setGif] = useState([]);
  useEffect(() => {
    const obtenerGif = async () => {
        await Axios.get('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=1015')
        .then(res => setGif(res.data))
    }
    obtenerGif()
  }, [gif])

  return (
    <>
      <h1 className="Titulo">Gif Galery</h1>
      <InputAgregar />
      <br />
      {gif.length<1?<h1 style={{textAlign: "center"}}>No posee gifs</h1>:null}
      <GifCard gif={gif}/>
    </>
  );
};

export default Layout;
