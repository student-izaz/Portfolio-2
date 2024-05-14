  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <About/>},
      {path: '/about', element: <About/>},
      {path: '/resume', element: <Resume/>},
      {path: '/work', element: <Work/>},
      {path: '/contact', element: <Contact/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode> 
)
