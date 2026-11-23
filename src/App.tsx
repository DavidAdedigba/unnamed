import { Routes,Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import ProjectDetailsPage from "./pages/ProjectDetails";

export default function App() {

  return (

    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
    </>
  )
}