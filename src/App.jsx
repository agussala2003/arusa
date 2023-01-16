import Navbar from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer'
import ProductsContainer from './components/ProductsContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer';
import Contact from './components/Contact';
import ArticleSection from './components/ArticleSection';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/arusa'element={<Home/>}/>
        <Route path='/arusa/products'element={<ProductsContainer/>}/>
        <Route path="/arusa/item/:id" element={<ItemDetailContainer />}/>
        <Route path='/arusa/cart' element ={<CartContainer/>}/>
        <Route path='/arusa/contact' element ={<Contact/>}/>
        <Route path='/arusa/article/:ide' element ={<ArticleSection/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
