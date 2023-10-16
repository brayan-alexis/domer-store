// import viteLogo from '/vite.svg'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { SignIn } from '../SignIn'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Navbar } from '../../components/Navbar'
import { Layout } from '../../components/Layout'
import './App.css'

const AppRoutes = () => useRoutes([
  { path: '/', element: <Home /> },
  { path: '/my-account', element: <MyAccount /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/my-order', element: <MyOrder /> },
  { path: '/my-orders', element: <MyOrders /> },
  { path: '*', element: <NotFound /> }
]);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
