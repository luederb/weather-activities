import { useState } from "react";

export default function ActivityForm({ handleAddActivity }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  function onAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddActivity(data, isChecked);
    event.target.reset();
    event.target.elements.name.focus();
  }

  // console.log("event good weather:", isChecked);

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
