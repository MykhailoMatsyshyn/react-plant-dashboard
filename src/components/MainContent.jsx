import { Flex } from "antd";
import Banner from "./Banner";
import ProductLists from "./ProductList";
import SellerLists from "./SellerList";

const MainContent = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Banner />
        <ProductLists />
        <SellerLists />
      </Flex>
    </div>
  );
};

export default MainContent;
