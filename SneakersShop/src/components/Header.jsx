import React from "react";
import "/imgBased/Logo.png";
export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 mt-10">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/imgBased/Logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">Sneakers-Shop</h3>
          <p>Shop of the best Sneakers</p>
        </div>
      </div>

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
          <img width={25} height={25} src="/imgBased/Favorite.svg" alt="" />
        </li>
        <li className="m-20">
          <img width={25} height={25} src="/imgBased/Profile.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}
