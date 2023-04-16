import React from "react";
import Info from "../Inforamtion";
import MainContext from "../../context";
import axios from "axios";
import { useCart } from "../CustomHooks/useCart";
import styles from "./Drawler.module.scss";
export default function Drawler({ Items = [], handleRemove, opended }) {
  const { setCart, setOrderItems } = React.useContext(MainContext);
  const { CartItmes, setCartItmes, countPrice, Tax } = useCart();
  const [makeOrder, setMakeOrder] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const sentOrder = async () => {
    try {
      setProcessing(true);
      const { data } = await axios.post("http://localhost:3000/user_Order", {
        Items: CartItmes,
      });
      for (let i = 0; i < CartItmes.length; i++) {
        await axios.delete(
          `http://localhost:3000/Cart/${CartItmes[i].id}`,
          CartItmes[i].id
        );
        delay(1000);
      }
      setOrderId(data.id);
      setOrderItems([...CartItmes], Items);
      setMakeOrder(true);
      setCartItmes([]);
    } catch {
      alert("Something went wrong");
    }
    setProcessing(false);
  };
  return (
    <div
      className={`
    ${styles.shadow}  ${opended ? styles.visible : ""}`}
    >
      <div className={styles.overlay}>
        <h2 className="d-flex justify-between">
          Cart
          <button onClick={() => setCart(false)} className={styles.close}>
            <img className="remove-bth" src="Icons/btnremove.svg" alt="" />
          </button>
        </h2>
        {Items.length > 0 ? (
          <div className={`${styles.notEmptyCart} d-flex flex-column`}>
            <div className={styles.ItemsBox}>
              {Items.map((items) => (
                <div
                  className={`${styles.cartItem} d-flex align-center mb-15`}
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
                    className={styles.remove}
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
              <ul className={styles.check}>
                <li className="d-flex mb-10">
                  <span>Total</span>
                  <div></div>
                  <b>{countPrice} $</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%</span>
                  <div></div>
                  <b>{Tax} $</b>
                </li>
              </ul>
            </div>
            <div className={styles.makeOrder}>
              <button
                disabled={processing}
                onClick={sentOrder}
                className="w100p"
              >
                Make order
                <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            img={makeOrder ? "/Icons/Complite.svg" : "/imgBased/emptyBox.svg"}
            title={
              makeOrder
                ? `You made the order! Your number is ${orderId}`
                : "Your cart is empty"
            }
            description={
              makeOrder
                ? "Your order will sent to kurer and will be delivered to your address"
                : "Add at least one pair of sneakres, to place an order"
            }
            buttonText={makeOrder ? "Your Purchases" : "Make order"}
          />
        )}
      </div>
    </div>
  );
}
