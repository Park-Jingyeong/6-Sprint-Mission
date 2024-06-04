import React from "react";
import heartIcon from "../../../assets/images/Icon.svg";
const ItemCard = ({ item }) => {
  return (
    <div>
      <img src={item.images} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}원</p>
        <div>
          <img src={heartIcon} alt="heartIcon" />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
