import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
export default function Favorites({ favoriteList, getFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center">
        <div className="goToHome">
          <Link to="/">
            <img src="/Icons/goBack.svg" alt="" />
          </Link>
        </div>

        <h1>My Favorite</h1>
      </div>
      <div className="cardsBox d-flex m-10">
        {favoriteList.map((item) => (
          <Card
            key={item.id}
            {...item}
            onAddCard={(obj) => getCartItmes(obj)}
            onAddFavorites={getFavorite}
            myFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
