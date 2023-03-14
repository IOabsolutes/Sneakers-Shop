import React from "react";
import Card from "./Card";

export default function CardContent(props) {
  return (
    <Card>
      <div className="favorite">
        <button className="favorite-bth">
          <img width={32} height={32} src="/Icons/unliked.svg" alt="" />
        </button>
      </div>
      <img width={133} height={112} src={props.img} alt="" />
      <p className="desb">{props.name}</p>

      <div className=" mt-10 d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} $</b>
        </div>
        <button className="buttonPlus">
          <img width={32} height={32} src="/Icons/addIcon.svg" alt="" />
        </button>
      </div>
    </Card>
  );
}
