const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border rounded-lg p-6 shadow-lg bg-gradient-to-r from-gray-50 to-gray-200 transition hover:shadow-xl">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 font-semibold mt-2">${product.price}</p>
  
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 w-full"
        >
          🛒 Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
