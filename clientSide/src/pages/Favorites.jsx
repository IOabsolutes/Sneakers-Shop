import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import MainContext from "../context";
import { NotItemsFound } from "../components/NotItemsFound";
export default function Favorites() {
  const { favoriteList, getFavorite } = React.useContext(MainContext);

  return (
    <div className="content p-40">
      {favoriteList.length > 0 ? (
        <div>
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
      ) : (
        <NotItemsFound
          title={"You didn't add sneaker 😞"}
          image="/Icons/arrow.svg"
          lowerText={"Add at least one sneaker."}
          buttonText={"Add Sneaker"}
        />
      )}
    </div>
  );
}
