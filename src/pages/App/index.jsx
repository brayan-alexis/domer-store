import { useRoutes, BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "../../context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { SignIn } from "../SignIn";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";
import { Notification } from "../../components/Notification";
import { ShoppingCartMenu } from "../../components/ShoppingCartMenu";

const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/category/:category", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder />},
    { path: "/my-orders/:id", element: <MyOrder />},
    { path: "*", element: <NotFound /> },
  ]);

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Notification />
        <ShoppingCartMenu />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
