export default function List({ filteredActivities, weather }) {
  console.log("weather-object: ", weather);
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
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
