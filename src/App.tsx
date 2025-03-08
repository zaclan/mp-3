import { Route, Routes, RouterProvider, createBrowserRouter } from "react-router";
import Home from "./components/mains/Home";
import Achievements from "./components/mains/Achievements";
import Contacts from "./components/mains/Contacts";
import Experience from "./components/mains/Experience";
import Education from "./components/mains/Education";
import Projects from "./components/mains/Projects";


function Root() {

  return (
    <Routes>
      <Route path={`/`} element={<Home/>} /> 
      <Route path={`/contacts`} element={<Contacts/>} />
      <Route path={`/projects`} element={<Projects/>} />
      <Route path={`/experience`} element={<Experience/>} />
      <Route path={`/education`} element={<Education/>} />
      <Route path={`/achievements`} element={<Achievements/>} />
    </Routes>
  )
};

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
);

export default function App() {
  return <RouterProvider router={router} />
}