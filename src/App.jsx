import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import ProductDescription from "./pages/ProductDescription/ProductDescription";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Categories  category='headphones'/>} />
      <Route path="/speakers" element={<Categories  category='speakers'/>} />
      <Route path="/earphones" element={<Categories  category='earphones'/>} />
      <Route path="/xx99-mark-two-headphones" element={<ProductDescription />} />
    </Routes>
  );
}

export default App;
