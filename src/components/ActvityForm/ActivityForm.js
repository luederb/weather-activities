import "./ActivityForm.css";
export default function ActivityForm({ handleAddActivity }) {
  function onAddActivity(event) {
    event.preventDefault();
    const newActivity = {
      name: event.target.elements.name.value,
      isGoodWeather: event.target.elements.isForGoodWeather.checked,
    };
    handleAddActivity(newActivity);
    event.target.reset();
    event.target.elements.name.focus();
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
          <label htmlFor="isForGoodWeather">Good-weather activity: </label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
