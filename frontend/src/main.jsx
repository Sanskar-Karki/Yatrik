import './App.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Destinations from './Pages/Destinations/Destinations';
import Gallery from './Pages/Gallery/Gallery'
import Signup from './Pages/Signup/Signup'
import Plans from './Pages/Plans/Plans'
import Login from './Pages/Signup/Login.jsx';
import Mountaineering from './Pages/Destinations/Options/Mountaineering/Mountaineering.jsx';
import Road from './Pages/Destinations/Options/Road/Road.jsx';
import Trekking from './Pages/Destinations/Options/Treaking/Trekking.jsx';
import GuideAnnapurna from './Pages/Destinations/Options/Guides/Guides.jsx';
import MountAnnapurna from './Pages/Destinations/Options/Treaking/ebc.jsx';
import Mustang from './Pages/Destinations/Options/Road/Mustang.jsx';
import MountMakalu from './Pages/Destinations/Options/Mountaineering/MountMakalu.jsx';
import Yatrikbot from './Pages/Yatrikbot/Yatrikbot.jsx';
import Unexplored from './Pages/Unexplored/Unexplored.jsx';
import Paymentpg from './Pages/Unexplored/Paymentpg.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "destinations",
    element: <Destinations />,
  },
  {
    path: "plans",
    element: <Plans />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "mountaineering",
    element: <Mountaineering />
  },
  {
    path: "Treaking",
    element: <Trekking />
  },
  {
    path: "road",
    element: <Road />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Guides",
    element: <GuideAnnapurna />,
  },
  {
    path: "property/1",
    element: <MountAnnapurna />,
  },
  {
    path: "property/2",
    element: <Mustang />,
  },
  {
    path: "property/4",
    element: <MountMakalu />,
  },
  {
    path: "yatrikbot",
    element: <Yatrikbot />,
  },
  {
    path: "unexplored",
    element: <Unexplored />,
  },
  {
    path: "payme",
    element: <Paymentpg />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
