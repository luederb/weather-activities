import { Fragment } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  console.log("event name:", activities);
  function handleAddActivity(data, isChecked) {
    setActivities([
      ...activities,
      { ...data, id: uid(), goodWeather: isChecked },
    ]);
  }

  return (
    <Fragment>
      <List activities={activities} />
      <ActivityForm handleAddActivity={handleAddActivity} />
    </Fragment>
  );
}
export default App;
