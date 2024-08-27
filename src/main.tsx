import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './Root.tsx'
import Home from './Home/Home.tsx'
import './index.css'
import Destination from './Destination/Destination.tsx'
import Crew from './Crew/Crew.tsx'
import Technology from './Technology/Technology.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[{
      path: '/',
      element: <Home />
    },
    {
      path: '/destination',
      element: <Destination />,
     
    },
    {
      path: '/crew',
      element: <Crew />
    },
    {
      path: '/technology',
      element: <Technology />
    }
      
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
