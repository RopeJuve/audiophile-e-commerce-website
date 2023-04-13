import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import ProductDescription from "./pages/ProductDescription/ProductDescription";
import { productData } from "./data";

function App() {
  const slugs = productData.map((prod) => prod.slug);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/headphones"
        element={<Categories category="headphones" />}
      />
      <Route path="/speakers" element={<Categories category="speakers" />} />
      <Route path="/earphones" element={<Categories category="earphones" />} />
      {slugs.map((prod) => (
        <Route path={`/${prod}`} element={<ProductDescription />} />
      ))}
    </Routes>
  );
}

export default App;
