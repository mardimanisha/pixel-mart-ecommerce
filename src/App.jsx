import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </ProductProvider>
    /** 
     <>
      <div className="relative">
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="m-10 pt-16 w-[80%]">
            <div className="m-10 flex flex-row justify-evenly items-center w-full px-[2rem] gap-8 border-2 p-8 overflow-auto">
              <CoverCard />
              <CoverCard />
            </div>
            <Banner />
            <Section />
            <Section />
          </div>
        </div>
      </div>
    </>
    */
  );
}

export default App;
