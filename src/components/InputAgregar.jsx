import { Axios } from "axios";
import React, {useState} from "react";

const InputAgregar = () => {
    const [objetoGif, setObjetoGif] = useState({
        "id":0,
        "url": "",
        "author_id": 0
    })
    const handleChange = (event) => {
        const target = event.target;
        const value = target.url;
        const name = target.id;
        setObjetoGif((userCurrent) => ({ ...userCurrent, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity() === true) {
            Axios.post(`https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/`, {
               data:{
                "url": url,
                "author_id": 1015
               }
            })
                
        }
    }
    
    const {url} = objetoGif
    console.log(objetoGif)
  return (
    <>
      <form className="formulario" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="fname" 
        value={url} onChange={e => handleChange(e)}/>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default InputAgregar;
