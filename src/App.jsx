import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import { Route, Link, Routes } from "react-router-dom";

import Drawler from "./components/Drawler";
import Header from "./components/header";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [Cart, setCart] = React.useState(false);
  const [Items, setItems] = React.useState([]);
  const [CartItmes, setCartItmes] = React.useState([]);
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [goToFavorite, setGoToFavorite] = React.useState(false);
  React.useEffect(() => {
    axios.get(" http://localhost:3000/sneakers").then((res) => {
      setItems(res.data);
    });
    // axios
    //   .get("https://641223dbf9fe8122ae1dd6a3.mockapi.io/favorites")
    //   .then((res) => {
    //     setFavoriteList(res.data);
    //   });
    axios.get(" http://localhost:3000/Cart").then((res) => {
      setCartItmes(res.data);
    });
  }, []);
  const openCart = () => {
    setCart(true);
  };
  const openFavorite = () => {
    setGoToFavorite(true);
  };
  const getCartItmes = (item) => {
    axios.post("http://localhost:3000/Card", item);
    setCartItmes((prev) => [...prev, item]);
  };
  const handleRemove = (id) => {
    axios.delete(`http://localhost:3000/Card/${id}`);
    setCartItmes((prev) => prev.filter((item) => item.id !== id));
  };
  const getFavorite = (item) => {
    if (favoriteList.find((obj) => obj.id === item.id)) {
      axios.delete( `http://localhost:3000/Favorites/${id}`);
      setFavoriteList((prev) => prev.filter((fItem) => fItem.id !== item.id));
    } 
    axios.post( "http://localhost:3000/Favorites");
    setFavoriteList((prev) => [...prev, item]);
    console.log(favoriteList);
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchValue(search);
  };
  const handleClear = () => {
    setSearchValue("");
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
      <Header openCart={openCart} openFavorite={openFavorite} />
      <Routes>
        <Route
          path="/favoritesss"
          element={
            <Favorites favoriteList={favoriteList} getFavorite={getFavorite} />
          }
        />
        <Route
          path="/"
          element={
            <Home
              Items={Items}
              getCartItmes={getCartItmes}
              getFavorite={getFavorite}
              searchValue={searchValue}
              handleSearch={handleSearch}
              handleClear={handleClear}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
