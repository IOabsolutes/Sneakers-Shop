import React from "react";
import Info from "./Inforamtion";
import MainContext from "../context";

export default function Drawler({ Items = [], handleRemove }) {
  const { setCart, setCartItmes, setOrderItems, CartItmes } =
    React.useContext(MainContext);
  const [makeOrder, setMakeOrder] = React.useState(false);
  const sentOrder = () => {
    setMakeOrder(true);
    setOrderItems([...CartItmes], Items);
    setCartItmes([]);
  };
  return (
    <div className="shadow">
      <div className="overlay">
        <h2 className="d-flex justify-between">
          Cart
          <button onClick={() => setCart(false)} className="close">
            <img className="remove-bth" src="Icons/btnremove.svg" alt="" />
          </button>
        </h2>
        {Items.length > 0 ? (
          <div className="notEmptyCart d-flex flex-column">
            <div className="ItemsBox">
              {Items.map((items) => (
                <div
                  className="cart-item d-flex align-center mb-15"
                  key={items.id}
                >
                  <img
                    className="mr-20"
                    width={70}
                    height={60}
                    src={items.image}
                    alt=""
                  />
                  <div className="mr-20 text-center">
                    <p className="mb-10">{items.name} </p>
                    <b>{items.price} $</b>
                  </div>
                  <button
                    onClick={() => handleRemove(items.id)}
                    className="remove"
                  >
                    <img
                      className="remove-bth"
                      src="Icons/btnremove.svg"
                      alt=""
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mb-15">
              <ul className="check">
                <li className="d-flex mb-10">
                  <span>Total</span>
                  <div></div>
                  <b>{0} $</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%</span>
                  <div></div>
                  <b>{0} $</b>
                </li>
              </ul>
            </div>
            <div className="makeOrder">
              <button onClick={sentOrder} className="w100p">
                Make order
                <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            img={makeOrder ? "/Icons/Complite.svg" : "/imgBased/emptyBox.svg"}
            title={makeOrder ? "You made the order!" : "Your cart is empty"}
            description={
              makeOrder
                ? "Your order will sent to kurer "
                : "Add at least one pair of sneakres, to place an order"
            }
          />
        )}
      </div>
    </div>
  );
}
