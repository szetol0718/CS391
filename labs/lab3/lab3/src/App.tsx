import ArtWorksListContent from "./components/ArtWorksListContent"
import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import AboutPage from "./components/AboutPage"
import ArtworkContent from "./components/ArtworkContent"
function Root(){
  return (
    <div>
      <Routes>
        <Route path="/" element= {<ArtWorksListContent/>}/>
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path = "/artwork/:id" element ={<ArtworkContent/>}/>
      </Routes>
    </div>
  )
}
const router = createBrowserRouter([{ path:"*", Component: Root}]);

export default function App() {
  return (<RouterProvider router={router}/>
  )
}


