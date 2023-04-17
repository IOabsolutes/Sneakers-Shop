import React from "react";
import MainContext from "../context";
import { Link } from "react-router-dom";
const Info = ({ img, title, description, buttonText, nav }) => {
  const { setCart } = React.useContext(MainContext);
  return (
    <div className="emptyCart d-flex flex-column align-center justify-center">
      <img className="emptyBox" width={120} height={120} src={img} alt="" />
      <b>{title}</b>
      <p>{description}</p>
      <Link to={`/${nav}`} className="w100p text-center">
        <button onClick={() => setCart(false)}>
          {buttonText}
          <img width={13} height={12} src="/Icons/arrow.svg" alt="" />
        </button>
      </Link>
    </div>
  );
};
export default Info;
