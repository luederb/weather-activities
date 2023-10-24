import "./List.css";
export default function List({
  filteredActivities,
  weather,
  handleClearActivities,
}) {
  function onClearActivites(event) {
    event.preventDefault();
    const clearActivity = "hallo";
    handleClearActivities(clearActivity);
  }
  return (
    <>
      <h1>
        {weather.condition} {weather.temperature} °C
      </h1>
      <h2>
        {weather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here`s what you can do:"}
      </h2>
      <ul>
        {filteredActivities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button>X</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onClearActivites}>
        Clear all activites
      </button>
      <button type="button" onClick={onClearActivites}>
        Clear all good weather activites
      </button>
      <button type="button" onClick={onClearActivites}>
        Clear all bad weather activites
      </button>
    </>
  );
}
