import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";
//
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* Display products,fetch and show ProductComponent from ProductListing */}
          <Route path="/" element={<ProductListing />} />
          {/* Make the links for the products work */}
          <Route path="/product/:productId" element={<ProductDetail />} />
          {/* SHow 404 Error if products not showing */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
