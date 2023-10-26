import { useShoppingCartContext } from "../../context";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";


const Navbar = () => {
  const { productsInCart } = useShoppingCartContext();
  const textDecoration = 'text-green-600'

  let leftNavbar = [
    { to: '/', text: 'Home', className: 'font-semibold text-lg' },
    { to: '/', text: 'All' },
    { to: '/t-shirts', text: 'T-shirts' },
    { to: '/hoodies', text: 'Hoodies' },
    { to: '/jeans', text: 'jeans' },
    { to: '/footwear', text: 'footwear' },
    { to: '/accessories', text: 'accessories' }
  ]

  let rightNavbar = [
    { to: '/my-account', text: 'My account 👤' },
    { to: '/sign-in', text: 'Sign In' },
    { to: '/my-order', text: 'My Order 📄' },
    { to: '/my-orders', text: 'My orders 📦' },
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
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
      <ul className="flex items-center gap-3">
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
          <button className="flex gap-1">
            <BsCart2 className="w-5 h-5" />
            <span className="flex justify-center items-center absolute -top-2 -right-2 h-4 w-4 rounded-full text-xs font-semibold bg-green-500">
              {productsInCart}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };