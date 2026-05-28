import useSWR from "swr";

export default function PlantForm() {
  const { mutate } = useSWR(`/api/plants`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
const plantData = Object.fromEntries(formData);


    const imageUrl = "/images/greenary_guy.png";

    plantData.imageUrl = imageUrl;

    const response = await fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    if (response.ok) {
      mutate();
    }

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="Expand your Garden"
      aria-describedby="add a new plant"
    >
      <fieldset>
        <legend>Expand your Garden</legend>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="botanicalName">Botanical Name: </label>
        <input type="text" id="botanicalName" name="botanicalName" required />

        <fieldset>
          <legend>Light needs</legend>

          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="fullSun"
            required
          />
          <label htmlFor="lightNeed">Full Sun</label>

          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="partialShade"
          />
          <label htmlFor="lightNeed">Partial Shade</label>

          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="Full Shade"
          />
          <label htmlFor="lightNeed">Full Shade</label>
        </fieldset>

        <fieldset>
          <legend>Water needs</legend>

          <input
            type="radio"
            id="waterNeed"
            name="waterNeed"
            value="low"
            required
          />
          <label htmlFor="waterNeed">Low</label>

          <input type="radio" id="waterNeed" name="waterNeed" value="medium" />
          <label htmlFor="waterNeed">Medium</label>

          <input type="radio" id="waterNeed" name="waterNeed" value="high" />
          <label htmlFor="waterNeed">High</label>
        </fieldset>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          size={300}
        ></input>

        <fieldset>
          <legend>Fertiliser Season</legend>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value="spring"
          ></input>
          <label htmlFor="fertiliserSeason">Spring</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value="summer"
          ></input>
          <label htmlFor="fertiliserSeason">Summer</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value="autumn"
          ></input>
          <label htmlFor="fertiliserSeason">Autumn</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value="winter"
          ></input>
          <label htmlFor="fertiliserSeason">Winter</label>
        </fieldset>
        <br />
        <button type="submit">plant your plant</button>
      </fieldset>
    </form>
  );
}
