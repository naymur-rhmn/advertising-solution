import React from "react";
import Home from "./pages/Home";
import DisplayMobile from "./pages/DisplayMobile";
import ActiveTabProvider from "./context/ActiveTabContext";
import DataManagement from "./pages/DataManagement";

function App() {
  return (
    <>
      {/* <Home /> */}
      <ActiveTabProvider>
        <DisplayMobile />
      </ActiveTabProvider>
      <DataManagement />
    </>
  );
}

export default App;
