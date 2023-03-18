import React from "react";
import styles from "./Card.module.scss";

export default function Card({ image, name, price, onAddCard }) {
  const [Add, setAdd] = React.useState(false);
  const getAdd = () => {
    onAddCard({ image, name, price });
    setAdd(!Add);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <button className={styles.favoriteBth}>
          <img width={32} height={32} src="/Icons/unliked.svg" alt="" />
        </button>
      </div>
      <img width={133} height={112} src={image} alt="" />
      <p className="nameSneaker">{name}</p>

      <div className=" mt-10 d-flex justify-between align-center">
        <div className="d-flex flex-column mt-10">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <button onClick={getAdd} className={styles.buttonPlus}>
          <img
            width={32}
            height={32}
            src={Add ? "/Icons/onAddIcon.svg" : "/Icons/addIcon.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
