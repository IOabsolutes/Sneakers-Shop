import React from "react";
import MainContext from "../context";
const Info = ({ img, title, description }) => {
  const { setCart } = React.useContext(MainContext);
  return (
    <div className="emptyCart d-flex flex-column align-center justify-center">
      <img className="emptyBox" width={120} height={120} src={img} alt="" />
      <b>{title}</b>
      <p>{description}</p>
      <button className="Goback" onClick={() => setCart(false)}>
        Go back
        <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
      </button>
    </div>
  );
};
export default Info;
