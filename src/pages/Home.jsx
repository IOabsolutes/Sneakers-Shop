import React from "react";
import Card from "../components/Card";
export default function Home({
  Items,
  getCartItmes,
  getFavorite,
  searchValue,
  handleSearch,
  handleClear,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>{searchValue ? `Look at : ${searchValue}` : "All Sneakers"}</h1>

        <div className="searchBlock d-flex align-center">
          <img width={17} height={17} src="/Icons/Vector.png" alt="search" />
          <input
            onChange={handleSearch}
            value={searchValue}
            className="Search"
            type="text"
            placeholder="Search..."
          />
          {searchValue && (
            <img
              width={14}
              height={14}
              onClick={handleClear}
              className="clearInput"
              src="/Icons/closeIcon.png"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="cardsBox d-flex m-10">
        {Items.filter((val) =>
          val.name.toLowerCase().includes(searchValue.toLowerCase())
        ).map((item) => (
          <Card
            key={item.id}
            {...item}
            onAddCard={(obj) => getCartItmes(obj)}
            onAddFavorites={getFavorite}
          />
        ))}
      </div>
    </div>
  );
}
