import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import PaginationBar from "../../../components/UI/PaginationBar";
import { getProducts } from "../../../api/itemApi";
import { useState, useEffect } from "react";

const AllItemsSection = () => {
  const [itemList, setItmeList] = useState([]);
  const [orderBy, setOrderBy] = useState("createdAt");
  const sortedItemList = itemList.sort((a, b) => b[orderBy] - a[orderBy]);

  const handleRecentClick = () => {
    setOrderBy("createdAt");
  };

  const handleFavoriteClick = () => {
    setOrderBy("favoriteCount");
  };

  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItmeList(products.list);
  };

  useEffect(() => {
    handleLoad(orderBy);
  }, [orderBy]);

  return (
    <div>
      <div>
        <h1>전체 상품</h1>
        <div>
          <input />
          <Link to="additem">상품 등록하기</Link>
          <div>
            <button onClick={handleRecentClick}>최신순</button>
            <button onClick={handleFavoriteClick}>좋아요순</button>
          </div>
        </div>
      </div>
      <div>
        {sortedItemList.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
      <div>
        <PaginationBar />
      </div>
    </div>
  );
};

export default AllItemsSection;
