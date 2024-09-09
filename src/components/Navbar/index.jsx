import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const { cartCount, setSearchProduct, toggleCartMenu } = useGlobalContext();
  const textDecoration = "text-green-600";

  let leftNavbar = [
    { to: "/", text: "DOMER STORE", className: "font-semibold text-lg" },
    { to: "/", text: "All" },
    { to: "/beauty", text: "Beauty" },
    { to: "/electronics", text: "Electronics" },
    { to: "/fashion", text: "Fashion" },
    { to: "/home-decoration", text: "Home & Decoration" },
    { to: "/sports-vehicles", text: "Sports & Vehicles" },
  ];

  let rightNavbar = [
    { to: "/my-account", text: "My account 👤" },
    { to: "/sign-in", text: "Sign In" },
    { to: "/my-order", text: "My Order 📄" },
    { to: "/my-orders", text: "My orders 📦" },
  ];

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light bg-white shadow-md ">
      <ul className="flex items-center gap-4">
        {leftNavbar.map((item, index) => (
          <li key={item.text} className={item.className}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive && index !== 0 ? textDecoration : undefined
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="relative">
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="w-72 p-2 text-xs rounded border focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600"
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <button className="absolute right-2 top-2 ">
          <BsSearch className="w-4 h-4 hover:text-green-600" />
        </button>
      </div>
      <ul className="flex items-center gap-4">
        {rightNavbar.map((item) => (
          <li key={item.text}>
            {item.to !== "" ? (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? textDecoration : undefined
                }
              >
                {item.text}
              </NavLink>
            ) : (
              <>{item.text}</>
            )}
          </li>
        ))}
        <li className="relative">
          <button className="flex gap-1" onClick={toggleCartMenu}>
            <BsCart2 className="w-5 h-5" />
            <span className="flex justify-center items-center absolute -top-2 -right-2 h-4 w-4 rounded-full text-xs font-semibold bg-green-500">
              {cartCount}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
