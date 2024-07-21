import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./scss/style.scss";

const ProductItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
          <button className="bg-black text-white py-2 px-5 cart-btn">
            Add to cart <ShoppingCartOutlined />
          </button>
          <Button onClick={showModal} className="bg-black text-white py-2 px-5">
            View detail
          </Button>
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="uppercase text-2xl"
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold uppercase">{item.name}</h2>
            </div>
            <div className="mb-10">
              <img
                src={item.image}
                alt={item.name}
                className="my-5 mx-auto bg-slate-400"
              />
              <p className="font-bold text-2xl mb-3">
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-base text-gray-500 mb-2 capitalize">
                {item.description}
              </p>
              <p className="text-base text-gray-500 capitalize">
                {item.shortDescription}
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
