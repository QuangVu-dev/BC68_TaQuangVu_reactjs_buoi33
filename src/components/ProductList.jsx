import ProductItem from "./ProductItem";

const ProductList = ({ item, updateId }) => {
  return <ProductItem item={item} updateId={updateId} />;
};

export default ProductList;
