import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
export default function Profile({ orderItems, getFavorite }) {
  return (
    <div className="content p-40">
      {orderItems.length > 0 ? (
        <div>
          <div className="d-flex align-center">
            <div className="goToHome">
              <Link to="/">
                <img src="/Icons/goBack.svg" alt="" />
              </Link>
            </div>
            <h1>My Purchases</h1>
          </div>
          <div className="cardsBox d-flex m-10">
            {orderItems.map((item) => (
              <Card
                key={item.id}
                {...item}
                onAddCard={(obj) => getCartItmes(obj)}
                onAddFavorites={getFavorite}
                ordered
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="NoItemsFound d-flex justify-center">
          <div className="d-flex align-center flex-column">
            <img src="/Icons/SadlySmile.svg" alt="" />
            <h2>You didn't place any order</h2>
            <p className="lowerText mt-5">Are you a poor?</p>
            <span className="lowerText">Place at least one order.</span>
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
