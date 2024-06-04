import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/Contact/Contact"
import GetbyId from "./pages/Contactid/GetbyId"
 
 
 


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
          index : true,
          element: <Home />
        },
        {
          path : "/Contact",
          element: <About />
        },
        {
          path : "/Contact/data/:id",
          element : <GetbyId />
        }
      ]
    },
  ])
  return (
    <div>
      <h1 className=" text-[50px] font-sans font-[700] text-blue-600 xs:text-[20px] xs:text-red-300">Helloo World</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
