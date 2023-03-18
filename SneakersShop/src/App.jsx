import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import Card from "./components/Card";
import Drawler from "./components/Drawler";
import Header from "./components/header";
import React from "react";
function App() {
  const [Items, setItems] = React.useState([]);
  const [CartItmes, setCartItmes] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [Cart, setCart] = React.useState(false);
  React.useEffect(() => {
    fetch("https://641223dbf9fe8122ae1dd6a3.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => setItems(data));
  }, []);
  const openCart = () => {
    setCart(true);
  };
  const getCartItmes = (item) => {
    setCartItmes((prev) => [...prev, item]);
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    const filtered = Items.filter((item) => item.name.includes(search));
    console.log(filtered);
  };
  return (
    <div className="wrapper clear">
      {Cart && <Drawler Items={CartItmes} onClose={() => setCart(false)} />}
      <Header openCart={openCart} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>
            {searchValue
              ? `Look at... : ${searchValue}`
              : "All Sneakers"}
          </h1>

          <div className="searchBlock d-flex align-center">
            <img width={17} height={17} src="/Icons/Vector.png" alt="search" />
            <input
              onChange={handleSearch}
              className="Search"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="cardsBox d-flex m-10">
          {Items.map((item) => (
            <Card
              key={item.name}
              image={item.image}
              name={item.name}
              price={item.price}
              onAddCard={getCartItmes}
              // getAdd={() => console.log("done")}5]]7
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
