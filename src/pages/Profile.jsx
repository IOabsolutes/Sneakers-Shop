import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import MainContext from "../context";
import axios from "axios";
import { NotItemsFound } from "../components/NotItemsFound";
export default function Profile() {
  const { orderItems, getFavorite, setOrderItems } =
    React.useContext(MainContext);
  const [loaded, setLoaded] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/user_Order");
        setOrderItems(data.map((obj) => obj.Items).flat());
        // console.log(data.reduce((prev, obj) => [...prev, ...obj.Items], []));
      } catch {
        alert("Something went wrong");
      }
      setLoaded(false);
    })();
  }, []);
  return (
    <div className="content p-40">
      {(loaded ? [...Array(8)] : orderItems).length > 0 ? (
        <div>
          <div className="d-flex align-center">
            <div className="goToHome">
              <Link to="/">
                <img src="/Icons/goBack.svg" alt="" />
              </Link>
            </div>
            <h1>My Purchases</h1>
          </div>
          <div className="cardsBox d-flex m-10">
            {(loaded ? [...Array(8)] : orderItems).map((item, index) => (
              <Card
                key={index}
                {...item}
                loading={loaded}
              />
            ))}
          </div>
        </div>
      ) : (
        <NotItemsFound
          title={"You didn't place any order"}
          image="/Icons/arrow.svg"
          uperText={"Are you a poor?"}
          lowerText={"Place at least one order."}
          buttonText={"Make a order"}
        />
      )}
    </div>
  );
}
