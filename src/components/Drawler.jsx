import React from "react";

export default function Drawler({ onClose, Items = [], handleRemove }) {
  return (
    <div className="shadow">
      <div className="overlay">
        <h2 className="d-flex justify-between">
          Cart
          <button onClick={onClose} className="close">
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
                  <div className="mr-20">
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
                  <b>300 $</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%</span>
                  <div></div>
                  <b>15 $</b>
                </li>
              </ul>
            </div>
            <div className="makeOrder">
              <button className="w100p">
                Make order
                <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="emptyCart d-flex flex-column align-center justify-center">
            <img
              className="emptyBox"
              width={120}
              height={120}
              src="/imgBased/emptyBox.svg"
              alt=""
            />
            <b>Your cart is empty</b>
            <p>Add at least one pair of sneakres, to place an order </p>
            <button onClick={onClose}>
              Go back
              <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
