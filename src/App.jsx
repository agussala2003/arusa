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
        <Route path='/'element={<Home/>}/>
        <Route path='/products'element={<ProductsContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path='/cart' element ={<CartContainer/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/article/:ide' element ={<ArticleSection/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
