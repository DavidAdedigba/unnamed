import { Routes,Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";

export default function App() {

  return (

    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element="" />
        </Route>
      </Routes>
    </>
  )
}