import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    { to: '', text: '🛒0' }
  ]

  const textDecoration = 'text-green-600'

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
      </ul>
    </nav>
  );
}

export { Navbar };