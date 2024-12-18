import { useContext } from "react";
import { ActiveTabContext } from "../context/ActiveTabContext";

function useActiveTab() {
  return useContext(ActiveTabContext);
}

export default useActiveTab;
