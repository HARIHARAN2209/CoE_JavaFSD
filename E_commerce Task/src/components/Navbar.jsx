import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
  <Link to="/" className="hover:text-gray-300 transition">ShopEase ✨</Link>
</h1>


        {/* Navigation Links */}
        <div className="space-x-8 flex items-center">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Cart 🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
