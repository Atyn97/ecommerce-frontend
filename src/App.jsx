import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/login" exact element={user ? <Home /> : <Login />} />
        <Route
          path="/register"
          exact
          element={user ? <Home /> : <Register />}
        />
        <Route path="/success" exact element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
