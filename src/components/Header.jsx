import React from "react";
import "/imgBased/Logo.png";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 mt-10">
      <div className="d-flex align-center">
        <Link to="/"> 
          <img width={40} height={40} src="/imgBased/Logo.png" alt="" />
        </Link>
        <div>
          <h3 className="text-uppercase">Sneakers-Shop</h3>
          <p>Shop of the best Sneakers</p>
        </div>
      </div>
      <>
        <ul className="d-flex align-center">
          <li className="m-20">
            <img
              onClick={props.openCart}
              width={25}
              height={25}
              src="/imgBased/ShopCart.svg"
              alt=""
            />
            <span>15,33$</span>
          </li>

          <li className="m-20">
            <Link to="/favoritesss">
              <img
                onClick={props.openFavorite}
                width={25}
                height={25}
                src="/imgBased/Favorite.svg"
                alt=""
              />
            </Link>
          </li>

          <li className="m-20">
            <img width={25} height={25} src="/imgBased/Profile.svg" alt="" />
          </li>
        </ul>
      </>
    </header>
  );
}
