import { Routes, Route} from "react-router-dom";

import Footer from "./features/home/components/Footer";
import HomeScreen from "./features/home/screen/Home";
import StoreScrren from "./features/store/Store";
import CartScreen from "./features/cart/CartItem";
import ArticlesScreen from "./features/Articles/Articlespage";
import ArticleDetails from "./features/Articles/ArticleDetails";
import CalculatorScreen from "./features/calculator/calculator";
import MessageScreen from "./features/message/Message";
import Navepar from "./features/navepar/Navepar";


export default function Layout() {
  return (
    <div>
     <Navepar/>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/articles" element={<ArticlesScreen />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/store" element={<StoreScrren />} />
        <Route path="/calculator" element={<CalculatorScreen />} />
        <Route path="/consulation" element={<MessageScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}
