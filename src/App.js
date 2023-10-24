import { Fragment } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
console.clear();

function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const filteredActivities = isGoodWeather
    ? activities.filter((activity) => activity.goodWeather === true)
    : activities.filter((activity) => activity.goodWeather === false);
  function handleAddActivity(data, isChecked) {
    setActivities([
      ...activities,
      { ...data, id: uid(), goodWeather: isChecked },
    ]);
  }
  return (
    <Fragment>
      <List
        filteredActivities={filteredActivities}
        isGoodWeather={isGoodWeather}
      />
      <ActivityForm handleAddActivity={handleAddActivity} />
    </Fragment>
  );
}
export default App;
