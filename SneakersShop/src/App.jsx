import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import Card from "./components/Card";
import Drawler from "./components/Drawler";
import Header from "./components/header";
import React from "react";
import axios from "axios";
function App() {
  const [Items, setItems] = React.useState([]);
  const [CartItmes, setCartItmes] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [Cart, setCart] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("https://641223dbf9fe8122ae1dd6a3.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://641223dbf9fe8122ae1dd6a3.mockapi.io/Card")
      .then((res) => {
        setCartItmes(res.data);
      });
  }, []);
  const openCart = () => {
    setCart(true);
  };
  const getCartItmes = (item) => {
    axios.post("https://641223dbf9fe8122ae1dd6a3.mockapi.io/Card", item);
    setCartItmes((prev) => [...prev, item]);
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchValue(search);
  };
  const handleClear = () => {
    setSearchValue("");
  };
  const handleRemove = (id) => {
    axios.delete(`https://641223dbf9fe8122ae1dd6a3.mockapi.io/Card/${id}`);
   setCartItmes(prev => prev.filter(item => item.id !== id));
  };
  return (
    <div className="wrapper clear">
      {Cart && (
        <Drawler
          handleRemove={handleRemove}
          Items={CartItmes}
          onClose={() => setCart(false)}
        />
      )}
      <Header openCart={openCart} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>{searchValue ? `Look at : ${searchValue}` : "All Sneakers"}</h1>

          <div className="searchBlock d-flex align-center">
            <img width={17} height={17} src="/Icons/Vector.png" alt="search" />
            <input
              onChange={handleSearch}
              value={searchValue}
              className="Search"
              type="text"
              placeholder="Search..."
            />
            {searchValue && (
              <img
                width={14}
                height={14}
                onClick={handleClear}
                className="clearInput"
                src="/Icons/closeIcon.png"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="cardsBox d-flex m-10">
          {Items.filter((val) =>
            val.name.toLowerCase().includes(searchValue.toLowerCase())
          ).map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              onAddCard={getCartItmes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
