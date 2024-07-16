import React, { useState } from "react";
import Modal from "./Modal";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductItem = ({ item, updateId }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openModal = (id) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="item border">
      <img className="bg-slate-300" src={item.image} alt={item.name} />
      <div className="px-4 py-4 text-sm">
        <h6 className="uppercase font-bold">{item.name}</h6>
        <p>
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p className="mb-3">Quantities: {item.quantity}</p>
        <div className="flex items-center justify-between text-sm">
          <button className="bg-black text-white py-2 px-5 hover:bg-slate-700">
            Add to cart <ShoppingCartOutlined />
          </button>
          <button
            onClick={() => {
              updateId(item.id);
              openModal(item.id);
            }}
            className="bg-black text-white py-2 px-5 hover:bg-slate-700"
          >
            View detail
          </button>
        </div>
      </div>
      {showModal && selectedProductId === item.id && (
        <Modal item={item} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProductItem;
