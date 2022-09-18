import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ShowCase from './pages/ShowCase/ShowCase'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import GetTheApp from './pages/GetTheApp/GetTheApp'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SkipedPage from './pages/SkipedPage/SkipedPage'
import MyCart from './components/Cart/MyCart'

import TestPage from './pages/TestPage/TestPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
