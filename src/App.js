import { Fragment } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect } from "react";
import { useState } from "react";
console.clear();

function App() {
  const URL = "https://example-apis.vercel.app/api/weather/europe";

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  const filteredActivities = weather
    ? activities.filter((activity) => activity.goodWeather === true)
    : activities.filter((activity) => activity.goodWeather === false);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("feched Weather:", data);
      setWeather(data.isGoodWeather ? true : false);
    }
    fetchWeather();
  }, []);
  function handleAddActivity(data, isChecked) {
    setActivities([
      ...activities,
      { ...data, id: uid(), goodWeather: isChecked },
    ]);
  }

  return (
    <Fragment>
      <List filteredActivities={filteredActivities} isGoodWeather={weather} />
      <ActivityForm handleAddActivity={handleAddActivity} />
    </Fragment>
  );
}
export default App;
