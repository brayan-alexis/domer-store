// import viteLogo from '/vite.svg'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { SignIn } from '../SignIn'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'

import './App.css'

function App() {

  return (
    <>
      <div className="App bg-red-500">
        <Home />
        <MyAccount />
        <SignIn />
        <MyOrder />
        <MyOrders />
        <NotFound />
      </div>
    </>
  )
}

export default App
