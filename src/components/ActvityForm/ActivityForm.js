import { useState } from "react";

export default function ActvityForm() {
  const [isChecked, setIsChecked] = useState(false);
  function onAddActivity(event) {
    event.preventDefault();
    setIsChecked(isChecked);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // const handleCheckBox = () => {
    //   setIsChecked(!isChecked);
    // };
    console.log("event name:", data.isForGoodWeather);
    console.log("event good weather:", data.isForGoodWeather.checked);
  }
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
            name="isForGoodWeather"
            id="isForGoodWeather"
            checked
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
console.log("hallo welt!");
