import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import Card from "./components/Card";
import Drawler from "./components/Drawler";
import Header from "./components/header";
import React from "react";
function App() {
  const array = [
    {
      img: "/imgOfSneakers/sneaker1.png",
      name: "Man`s Sneakers Nike Blazer Mid Suede",
      price: "30,99",
    },
    {
      img: "/imgOfSneakers/sneaker1.png",
      name: "Woman`s Sneakers Nike Blazer Mid Suede",
      price: "12,99",
    },
  ];
  const [Cart, setCart] = React.useState(false);
  const getCart = () => {
    setCart(true);
  };
  return (
    <div className="wrapper clear">
      {Cart && <Drawler onClose={() => setCart(false)} />}
      <Header getCart={getCart} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>All Sneakers</h1>

          <div className="searchBlock d-flex align-center">
            <img width={17} height={17} src="/Icons/Vector.png" alt="search" />
            <input className="Search" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="cardsBox d-flex m-10">
          {array.map((item) => (
            <Card
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
              onAddCard={() => console.log("worked")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
