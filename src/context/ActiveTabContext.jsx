import { createContext, useState } from "react";

export const ActiveTabContext = createContext("");

function ActiveTabProvider({ children }) {
  const [activeTab, setActiveTab] = useState("mobile");

  const handleTab = (tabName) => {
    const modifiedTab = tabName.toLowerCase();
    if (modifiedTab === "mobile") {
      setActiveTab("mobile");
    }
    if (modifiedTab === "display") {
      setActiveTab("display");
    }
  };

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab, handleTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}
export default ActiveTabProvider;
