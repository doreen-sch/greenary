import useSWR from "swr";
import styled from "styled-components";

export default function PlantForm() {
  const { mutate } = useSWR(`/api/plants`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    const imageUrl = "@/public/images/greenary_guy.png";

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
          <label htmlFor="lightNeed">Full Shade</label>
          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="Full Shade"
            required
          />
          <label htmlFor="lightNeed">Partial Shade</label>
          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="Partial Shade"
          />
          <label htmlFor="lightNeed">Full Sun</label>
          <input
            type="radio"
            id="lightNeed"
            name="lightNeed"
            value="Full Sun"
          />
        </fieldset>

        <fieldset>
          <legend>Water needs</legend>
          <label htmlFor="waterNeed">Low</label>
          <input
            type="radio"
            id="waterNeed"
            name="waterNeed"
            value="Low"
            required
          />
          <label htmlFor="waterNeed">Medium</label>
          <input type="radio" id="waterNeed" name="waterNeed" value="Medium" />
          <label htmlFor="waterNeed">High</label>
          <input type="radio" id="waterNeed" name="waterNeed" value="High" />
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
          <label htmlFor="fertiliserSeason">Spring</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value={"Spring"}
          ></input>
          <label htmlFor="fertiliserSeason">Summer</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value={"Summer"}
          ></input>
          <label htmlFor="fertiliserSeason">Fall</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value={"Fall"}
          ></input>
          <label htmlFor="fertiliserSeason">Winter</label>
          <input
            type="checkbox"
            id="fertiliserSeason"
            name="fertiliserSeason"
            value={"Winter"}
          ></input>
        </fieldset>
        <br />
        <button type="submit">plant your plant</button>
      </fieldset>
    </form>
  );
}
