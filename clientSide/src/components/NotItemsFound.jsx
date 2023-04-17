import React from "react";
import { Link } from "react-router-dom";
export function NotItemsFound({
  image,
  title,
  uperText,
  lowerText,
  buttonText,
}) {
  return (
    <div className="NoItemsFound d-flex justify-center">
      <div className="d-flex align-center flex-column">
        <img src="/Icons/SadlySmile.svg" alt="" />
        <h2>{title}</h2>
        <p className="lowerText mt-5">{uperText}</p>
        <span className="lowerText">{lowerText}</span>
        <Link className="mt-25" to="/">
          <button className="Goback p-20 d-flex justify-center align-center">
            {buttonText}
            <img className="ml-20" width={13} height={13} src={image} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}
