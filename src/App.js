
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import CheckoutPage from "./pages/checkout";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>      
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
          </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
