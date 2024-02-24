import React from "react";
import sales from "./product";

const App = () => {
  return (
    <>
      <div
        id="siuu"
        style={{
          display: "flex",
          width: "500px",
          marginLeft: "110px",
          marginTop: "100px",
          gap: "50px",
        }}
      >
        {sales.map((product) => (
          <div>
            <img src={product.imgUrl} alt={product.name}></img>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <h5>{product.description}</h5>
          </div>
        ))}
      </div>
      <div>
        {" "}
        <h1 style={{ marginLeft: "600px" }}>Hello there</h1>
      </div>
    </>
  );
};

export default App;
