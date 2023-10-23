import { useState } from "react";
import { uid } from "uid";

export default function ActivityForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  function onAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setActivities([
      ...activities,
      { ...data, id: uid(), goodWeather: isChecked },
    ]);
  }

  console.log("event name:", activities);
  console.log("event good weather:", isChecked);

  return (
    <section>
      <form onSubmit={onAddActivity}>
        <h1>Add new activity:</h1>
        <div>
          <label htmlFor="name">Name: </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="enter your activity"
          ></input>
        </div>

        <div>
          <label htmlFor="goodWeather">Good-weather activity: </label>

          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="isForGoodWeather"
            id="isForGoodWeather"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

console.log("hallo welt!");
