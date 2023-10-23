import { Fragment } from "react";
import "./App.css";
import ActivityForm from "./components/ActvityForm/ActivityForm.js";
import { useState } from "react";
console.clear();

function App() { const [activities, setActivities] = useState([]);
  console.log("event name:", activities);
  return (
    <Fragment>
      <ActivityForm activities={activities} setActivities={setActivities}/>
    </Fragment>

  ); 
}
export default App;
