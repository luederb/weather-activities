export default function List({filteredActivities, isGoodWeather}) {
  console.log("Filtered activities: ", filteredActivities);
  return ( 
    <>
    <h2>{isGoodWeather ? "The weather is awesome! Go outside and:" 
    : "Bad weather outside! Here`s what you can do:" }</h2>
    <ul>
      {filteredActivities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
    </>
  );
}
