import React from "react";
import Home from "./pages/Home";
import DisplayMobile from "./pages/DisplayMobile";
import ActiveTabProvider from "./context/ActiveTabContext";

function App() {
  return (
    <>
      {/* <Home /> */}
      <ActiveTabProvider>
        <DisplayMobile />
      </ActiveTabProvider>
    </>
  );
}

export default App;
