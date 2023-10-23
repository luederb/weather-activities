export default function ActvityForm() {
  return (
    <section>
      <form>
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
          <label htmlFor="good-weather">Good-weather activity: </label>

          <input type="checkbox" name="good-weather" id="good-weather"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
console.log("hallo welt!");
