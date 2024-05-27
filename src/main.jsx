import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/Store.js';
import Home from './components/Home.jsx';

const router=createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="*" element={<Home/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
