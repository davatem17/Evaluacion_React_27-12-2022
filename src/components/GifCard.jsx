import React from "react";

const GifCard = () => {
  return (
    <>
      <div className="card">
        <img
          src="/w3images/jeans3.jpg"
          alt="Denim Jeans"
          style={{ width: "100%" }}
        />
        
        <p>
          <button>Eliminar</button>
        </p>
      </div>
    </>
  );
};

export default GifCard;
