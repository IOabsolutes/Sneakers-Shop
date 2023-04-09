import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import { Route, Routes } from "react-router-dom";

import Drawler from "./components/Drawler";
import Header from "./components/header";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import MainContext from "./context";
function App() {
  const [Cart, setCart] = React.useState(false);
  const [loaded, setLoaded] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  const [Items, setItems] = React.useState([]);
  const [CartItmes, setCartItmes] = React.useState([]);
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      setLoaded(true);
      const Items = await axios.get("http://localhost:3000/items");
      const Cart = await axios.get("http://localhost:3000/Cart");
      const Favorites = await axios.get("http://localhost:3000/Favorites");
      const user_Order = await axios.get("http://localhost:3000/user_Order");

      setCartItmes(Cart.data);
      setFavoriteList(Favorites.data);
      setOrderItems(user_Order.data);
      setItems(Items.data);
      setLoaded(false);
    }
    getData();
  }, []);
  const openCart = () => {
    setCart(true);
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchValue(search);
  };
  const handleClear = () => {
    setSearchValue("");
  };
  const getCartItmes = (item) => {
    try {
      if (CartItmes.find((obj) => obj.id === item.id)) {
        axios.delete(`http://localhost:3000/Cart/${item.id}`, item.id);
        setCartItmes((prev) =>
          prev.filter((CurItem) => CurItem.id !== item.id)
        );
      } else {
        axios.post("http://localhost:3000/Cart", item);
        setCartItmes((prev) => [...prev, item]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = (id) => {
    axios.delete(`http://localhost:3000/Cart/${id}`, id);
    setCartItmes((prev) => prev.filter((obj) => obj.id !== id));
  };
  const getFavorite = async (item) => {
    try {
      if (favoriteList.find((obj) => Number(obj.id) === Number(item.id))) {
        axios.delete(`http://localhost:3000/Favorites/${item.id}`);
        setFavoriteList((prev) =>
          prev.filter((CurItem) => Number(CurItem.id) !== Number(item.id))
        );
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/Favorites",
          item
        );
        setFavoriteList((prev) => [...prev, data]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleOrder = (id) => {
    return CartItmes.some((obj) => Number(obj.id) === Number(id));
  };
  return (
    <MainContext.Provider
      value={{
        Items,
        CartItmes,
        favoriteList,
        handleOrder,
        getFavorite,
        setCart,
        setCartItmes,
        setOrderItems,
      }}
    >
      <div className="wrapper clear">
        {Cart && <Drawler handleRemove={handleRemove} Items={CartItmes} />}
        <Header openCart={openCart} />
        <Routes>
          <Route path="/favoritesss" element={<Favorites />} />
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
                CartItmes={CartItmes}
                loading={loaded}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile orderItems={orderItems} />}
          />
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
