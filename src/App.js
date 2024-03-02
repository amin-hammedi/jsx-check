import React from "react";
import sales from "./product";
import SalesCard from "./SalesCard";

const App = () => {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            width: "500px",
            marginTop: "100px",
            marginLeft: "115px",
            gap: "50px",
          }}
        >
          {sales.map((item, index) => (
            <div key={index}>
              <SalesCard
                name={item.name}
                description={item.description}
                price={item.price}
                imgUrl={item.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        {" "}
        <h1 style={{ marginLeft: "600px" }}>Hello there</h1>
      </div>
    </>
  );
};

export default App;
