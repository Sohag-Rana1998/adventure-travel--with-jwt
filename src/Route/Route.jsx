import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';

import Home from '../Components/Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import AddTravelSpot from '../Pages/AddTravelSpot/AddTravelSpot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/add_travel_spot',
        element: <AddTravelSpot></AddTravelSpot>,
      },
    ],
  },
]);

export default router;
