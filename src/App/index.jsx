import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import NotFound from "../Pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-red-100">Hola mundo</div>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
    </>
  );
}

export default App;
