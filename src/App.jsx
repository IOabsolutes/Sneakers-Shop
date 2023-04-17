import "./App.scss";
import "./components/header.scss";
import "./components/Card/Card.module.scss";
import { Route, Routes } from "react-router-dom";
import Drawler from "./components/Drawler";
import Header from "./components/Header";
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
      try {
        const [Cart, Favorites, Items] = await Promise.all([
          axios.get("http://localhost:3000/Cart"),
          axios.get("http://localhost:3000/Favorites"),
          axios.get("http://localhost:3000/items"),
        ]);
        setCartItmes(Cart.data);
        setFavoriteList(Favorites.data);
        setItems(Items.data);
      } catch (err) {
        alert("Something went wrong");
      }

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
  const getCartItmes = async (item) => {
    try {
      if (CartItmes.find((obj) => Number(obj.id) === Number(item.id))) {
        await axios.delete(`http://localhost:3000/Cart/${item.id}`, item.id);
        setCartItmes((prev) =>
          prev.filter((CurItem) => CurItem.id !== item.id)
        );
      } else {
        await axios.post("http://localhost:3000/Cart", item);
        setCartItmes((prev) => [...prev, item]);
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };
  const handleRemove = (id) => {
    try {
      axios.delete(`http://localhost:3000/Cart/${id}`, id);
      setCartItmes((prev) =>
        prev.filter((obj) => Number(obj.id) !== Number(id))
      );
    } catch {
      alert("Something went wrong");
    }
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
      alert("Something went wrong");
    }
  };
  const handleOrder = (id) => {
    return CartItmes.some((obj) => Number(obj.parentID) === Number(id));
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
        orderItems,
        loading: loaded,
      }}
    >
      <div className="wrapper clear">
        <Drawler handleRemove={handleRemove} Items={CartItmes} opended={Cart} />
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
