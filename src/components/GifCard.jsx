import React from "react";

const GifCard = ({gif}) => {
  console.log(gif)
  return (
    <>
      {gif.map(res => <div className="card" key={res.id}>
        <img
          src={res.url}
          alt="Denim Jeans"
          style={{ width: "100%" }}
        />
        <p>
          <button>Eliminar</button>
        </p>
      </div>)}
      
    </>
  );
};

export default GifCard;
