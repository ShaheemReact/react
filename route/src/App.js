import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import Root from './components/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';
const router = createBrowserRouter([
  {path:'/',
  element:<Root/>,
  children:[
    { index:true,element:<HomePage/> },//path:''
    {path:'product',element:<ProductPage/>},
    {path:'product/:productId',element:<ProductDetailPage/>},

  ],
  errorElement:<ErrorPage/> 
},  

])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
 