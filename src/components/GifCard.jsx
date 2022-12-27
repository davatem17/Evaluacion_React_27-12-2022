import React from "react";
import Axios from "axios";
const GifCard = ({gif}) => {
  console.log(gif)
  const postDelet = (res) => {
       
    Axios.delete(`https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/`, {
      data: {
        "author_id": res.author_id ,
      "id": res.id,
      "url": res.url
      }
      
    })
    .then(res => console.log('Borrar')).catch(err=>console.log(err))
}
  return (
    <>
      {gif.map(res => <div className="card" key={res.id}>
        <img
          src={res.url}
          alt="Denim Jeans"
          style={{ width: "100%" }}
        />
        <p>
          <button onClick={()=>postDelet(res)}>Eliminar</button>
        </p>
      </div>)}
      
    </>
  );
};

export default GifCard;
