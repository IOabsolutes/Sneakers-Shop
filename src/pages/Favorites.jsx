import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import MainContext from "../context";

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
        <div className="NoItemsFound d-flex justify-center">
          <div className="d-flex align-center flex-column">
            <img src="/Icons/sadSmile.svg" alt="" />
            <h2>You didn't add sneaker 😞</h2>
            <p className="lowerText mt-5">Add at least one sneaker</p>
            <Link className="mt-25" to="/">
              <button className="Goback p-20 d-flex justify-center align-center">
                Go back
                <img
                  className="ml-20"
                  width={13}
                  height={13}
                  src="/Icons/arrow.svg"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
