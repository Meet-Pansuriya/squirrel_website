import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Why } from "./pages/Why";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/jet-x500" element={<ProductDetail />} />
        <Route path="/why" element={<Why />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppLayout>
  );
};

App.displayName = "App";

export default App;
