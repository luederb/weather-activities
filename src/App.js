import { Fragment } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
console.clear();

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log("event name:", activities);
  return (
    <Fragment>
      <List activities={activities} />
      <ActivityForm activities={activities} setActivities={setActivities} />
    </Fragment>
  );
}
export default App;
