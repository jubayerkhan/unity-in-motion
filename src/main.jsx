import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AcademyToStudio from './components/AcademyToStudio/AcademyToStudio';
import FreeClass from './components/FreeClass/FreeClass';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/academy",
        element: <AcademyToStudio></AcademyToStudio>
      },
      {
        path: "/class",
        element: <FreeClass></FreeClass>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
