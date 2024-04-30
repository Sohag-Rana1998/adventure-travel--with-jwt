import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AddTouristSpot from '../../Pages/AddTouristSpot/AddTouristSpot';
import AllTouristSpot from '../../Pages/AllTouristSpot/AllTouristSpot';
import PrivateRoute from '../PrivetRoute/PrivateRoute';
import ViewSpotDetails from '../../Pages/ViewSpotDetails/ViewSpotDetails';
import UpdateTouristData from '../../Pages/UpdateTouristData/UpdateTouristData';
import MyListOfSpot from '../../Pages/MyListOfSpot/MyListOfSpot';
import CountriesSpots from '../../Pages/CoutriesSpots/CountriesSpots';
import FullReview from '../../Pages/Home/Sections/FullReview';
import AddReview from '../../Pages/Home/Sections/AddReview';

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
        path: '/add_tourist_spot',
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/all-tourist-spot',
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: '/my-tourist-spot-list',
        element: (
          <PrivateRoute>
            <MyListOfSpot></MyListOfSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/view-details/:id',
        element: (
          <PrivateRoute>
            <ViewSpotDetails></ViewSpotDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/full-review/:id',
        element: <FullReview></FullReview>,
      },
      {
        path: '/update-tourist-data/:id',
        element: (
          <PrivateRoute>
            <UpdateTouristData></UpdateTouristData>
          </PrivateRoute>
        ),
      },
      {
        path: '/countries-spots/:CountryName',
        element: <CountriesSpots></CountriesSpots>,
      },
      {
        path: '/add-review',
        element: <AddReview></AddReview>,
      },
    ],
  },
]);

export default router;
