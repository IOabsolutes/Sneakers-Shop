import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import MainContext from "../../context";
export default function Card({
  image,
  name,
  price,
  id,
  onAddCard,
  onAddFavorites,
  myFavorite = false,

  loading = false,
}) {
  const { handleOrder } = React.useContext(MainContext);

  const [favorite, setFavorite] = React.useState(myFavorite);
  const getAdd = () => {
    onAddCard({ image, name, price, id });
  };
  const getFavorite = () => {
    onAddFavorites({ image, name, price, id });
    setFavorite(!favorite);
  };
  return (
    <div key={id} className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={200}
          viewBox="0 0 160 200"
          backgroundColor="#e1e1e1"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="9" ry="9" width="160" height="90" />
          <rect x="0" y="101" rx="3" ry="3" width="160" height="17" />
          <rect x="0" y="124" rx="3" ry="3" width="92" height="17" />
          <rect x="0" y="162" rx="9" ry="9" width="80" height="32" />
          <rect x="115" y="162" rx="6" ry="6" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <button onClick={getFavorite} className={styles.favoriteBth}>
              <img
                width={32}
                height={32}
                src={favorite ? "/Icons/liked.svg" : "/Icons/unliked.svg"}
                alt=""
              />
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
                src={
                  handleOrder(id)
                    ? "/Icons/onAddIcon.svg"
                    : "/Icons/addIcon.svg"
                }
                alt=""
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
