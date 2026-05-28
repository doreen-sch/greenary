import useSWR from "swr";

export default function PlantForm({ plant }) {
  const { mutate } = useSWR(`/api/plants`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    plantData.fertiliserSeason = formData.getAll("fertiliserSeason");

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

      event.target.reset();
      event.target.elements.name.focus();
    }
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
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={plant.name}
          required
        />

        <label htmlFor="botanicalName">Botanical Name: </label>
        <input
          type="text"
          id="botanicalName"
          name="botanicalName"
          defaultValue={plant.botanicalName}
          required
        />

        <fieldset>
          <legend>Light needs</legend>

          <input
            type="radio"
            id="lightNeed-fullSun"
            name="lightNeed"
            value="fullSun"
            defaultValue={plant.lightNeed}
            required
          />
          <label htmlFor="lightNeed-fullSun">Full Sun</label>

          <input
            type="radio"
            id="lightNeed-partialShade"
            name="lightNeed"
            value="partialShade"
            defaultValue={plant.lightNeed}
          />
          <label htmlFor="lightNeed-partialShade">Partial Shade</label>

          <input
            type="radio"
            id="lightNeed-fullShade"
            name="lightNeed"
            value="fullShade"
            defaultValue={plant.lightNeed}
          />
          <label htmlFor="lightNeed-fullShade">Full Shade</label>
        </fieldset>

        <fieldset>
          <legend>Water needs</legend>

          <input
            type="radio"
            id="waterNeed-low"
            name="waterNeed"
            value="low"
            defaultValue={plant.waterNeed}
            required
          />
          <label htmlFor="waterNeed-low">Low</label>

          <input
            type="radio"
            id="waterNeed-medium"
            name="waterNeed"
            value="medium"
            defaultValue={plant.waterNeed}
          />
          <label htmlFor="waterNeed-medium">Medium</label>

          <input
            type="radio"
            id="waterNeed-high"
            name="waterNeed"
            value="high"
            defaultValue={plant.waterNeed}
          />
          <label htmlFor="waterNeed-high">High</label>
        </fieldset>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          size={300}
          defaultValue={plant.description}
        ></input>

        <fieldset>
          <legend>Fertiliser Season</legend>
          <input
            type="checkbox"
            id="fertiliserSeason-spring"
            name="fertiliserSeason"
            value="spring"
            defaultValue={plant.fertiliserSeason}
          ></input>
          <label htmlFor="fertiliserSeason-spring">Spring</label>
          <input
            type="checkbox"
            id="fertiliserSeason-summer"
            name="fertiliserSeason"
            value="summer"
            defaultValue={plant.fertiliserSeason}
          ></input>
          <label htmlFor="fertiliserSeason-summer">Summer</label>
          <input
            type="checkbox"
            id="fertiliserSeason-autumn"
            name="fertiliserSeason"
            value="autumn"
            defaultValue={plant.fertiliserSeason}
          ></input>
          <label htmlFor="fertiliserSeason-autumn">Autumn</label>
          <input
            type="checkbox"
            id="fertiliserSeason-winter"
            name="fertiliserSeason"
            value="winter"
            defaultValue={plant.fertiliserSeason}
          ></input>
          <label htmlFor="fertiliserSeason-winter">Winter</label>
        </fieldset>

        <button type="submit">plant your plant</button>
      </fieldset>
    </form>
  );
}
