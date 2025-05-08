import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DisplayMobile from "./pages/DisplayMobile";
import ActiveTabProvider from "./context/ActiveTabContext";
import DataManagement from "./pages/DataManagement";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="display"
              element={
                <ActiveTabProvider>
                  <DisplayMobile />
                </ActiveTabProvider>
              }
            />
            <Route
              path="mobile"
              element={
                <ActiveTabProvider>
                  <DisplayMobile />
                </ActiveTabProvider>
              }
            />
            <Route path="dmp" element={<DataManagement />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="semantica" element={<Platform />} />
            <Route path="platform" element={<Platform />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      {/* <ActiveTabProvider>
        <DisplayMobile />
      </ActiveTabProvider> */}
      {/* <DataManagement /> */}
    </>
  );
}

export default App;
