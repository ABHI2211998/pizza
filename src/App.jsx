import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createActionOrder,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // 2  provide the loder
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        // when ever form submition on this path then this action will be called
        path: "/order/new",
        element: <CreateOrder />,
        order: createActionOrder,
        action: createActionOrder,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
