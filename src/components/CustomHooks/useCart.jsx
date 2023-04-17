import React from "react";
import MainContext from "../../context";
export function useCart() {
  const { CartItmes, setCartItmes } = React.useContext(MainContext);
  const countPrice = CartItmes.reduce(
    (sum, obj) => parseFloat(obj.price) + sum,
    0
  ).toFixed(2);

  const Tax = parseFloat(countPrice * 0.05).toFixed(2);
  return { CartItmes, setCartItmes, countPrice, Tax };
}
