import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { cartContext } from "../../context/cartContext";

const Card = ({ viewDetails, product }) => {
  const { images, title, price, category } = product;
  const { addToCart } = useContext(cartContext);

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div
      className="Card bg-white cursor-pointer w-56 h-60 rounded-lg active:scale-110 transition ease-in-out duration-150"
      onClick={() => viewDetails(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          fabo
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images?.[0] || "/fallback-image.png"}
          alt={title || "Product Image"}
          onError={(e) => (e.target.src = "/fallback-image.png")}
        />
        <button
          className="absolute m-2 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
          aria-label={`Add ${title} to cart`}
        >
          <AiOutlinePlus className="h-5 w-5 text-black" onClick={handleAdd} />
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light truncate w-3/4">{title}</span>
        <span className="text-lg font-medium">{price}$</span>
      </p>
    </div>
  );
};

export default Card;
