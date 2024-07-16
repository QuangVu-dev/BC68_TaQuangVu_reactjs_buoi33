import { CloseOutlined } from "@ant-design/icons";

const Modal = ({ item, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 shadow-lg">
        <div className="flex justify-between mt-10">
          <h2 className="text-2xl font-bold uppercase">{item.name}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <CloseOutlined style={{ fontSize: "20px" }} />
          </button>
        </div>
        <div className="mb-10">
          <img
            src={item.image}
            alt={item.name}
            className="my-4 mx-auto bg-slate-400"
          />
          <p className="font-bold text-2xl mb-3">
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="text-xl text-gray-700 mb-2">{item.description}</p>
          <p className="text-xl text-gray-700">{item.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
