import { Fragment, useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect } from "react";

function App() {
  const URL = "https://example-apis.vercel.app/api/weather/europe";
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);
  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === weather.isGoodWeather
  );
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(URL);
      const data = await response.json();

      setWeather(data);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    console.log("activities: ", activities);
    console.log("fetched Weather:", weather);
    console.log("filtered activities: ", filteredActivities);
  }
  function handleClearActivities() {
    setActivities(activities.filter((activity) => !activity.isGoodWeather));
    localStorage.removeItem(
      activities.filter((activity) => activity.isGoodWeather)
    );
  }

  return (
    <Fragment>
      <List
        filteredActivities={filteredActivities}
        weather={weather}
        handleClearActivities={handleClearActivities}
      />
      <ActivityForm handleAddActivity={handleAddActivity} />
    </Fragment>
  );
}
export default App;
