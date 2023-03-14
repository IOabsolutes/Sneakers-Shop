import React from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles.card}>
      {/* {props.array.map((item) => (
        <CardContent key={item.name} img={item.img} name={item.name} price={item.price} />
      ))} */}
      <div className={styles.favorite}>
        <button className={styles.favoriteBth}>
          <img width={32} height={32} src="/Icons/unliked.svg" alt="" />
        </button>
      </div>
      <img width={133} height={112} src={props.img} alt="" />
      <p className="nameSneaker">{props.name}</p>

      <div className=" mt-10 d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} $</b>
        </div>
        <button className={styles.buttonPlus}>
          <img width={32} height={32} src="/Icons/addIcon.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
