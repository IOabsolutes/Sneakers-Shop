import React from 'react'

export default function Drawler() {
  return (
    
    <div style={{ display: "" }} className="shadow">
    <div className="overlay">
      <h2 className="d-flex justify-between">
        Cart
        <button className="remove">
          <img className="remove-bth" src="Icons/btnremove.svg" alt="" />
        </button>
      </h2>
      <div className="ItemsBox">
        <div className="cart-item d-flex align-center">
          <img
            className="mr-20"
            width={70}
            height={70}
            src="imgOfSneakers/sneaker1.png"
            alt=""
          />
          <div className="mr-20">
            <p className="mb-5">Man`s Sneakers Nike Blazer Mid Suede </p>
            <b>30,99 $</b>
          </div>
          <button className="remove">
            <img className="remove-bth" src="Icons/btnremove.svg" alt="" />
          </button>
        </div>
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
  </div>

  )
}
