export default function PlantForm({
  plant,
  isEditMode,
  setShowEditForm,
  showEditForm,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
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
            value="Full Sun"
            defaultChecked={plant.lightNeed === "Full Sun"}
            required
          />
          <label htmlFor="lightNeed-fullSun">Full Sun</label>

          <input
            type="radio"
            id="lightNeed-partialShade"
            name="lightNeed"
            value="Partial Shade"
            defaultChecked={plant.lightNeed === "Partial Shade"}
          />
          <label htmlFor="lightNeed-partialShade">Partial Shade</label>

          <input
            type="radio"
            id="lightNeed-fullShade"
            name="lightNeed"
            value="Full Shade"
            defaultChecked={plant.lightNeed === "Full Shade"}
          />
          <label htmlFor="lightNeed-fullShade">Full Shade</label>
        </fieldset>

        <fieldset>
          <legend>Water needs</legend>

          <input
            type="radio"
            id="waterNeed-low"
            name="waterNeed"
            value="Low"
            defaultChecked={plant.waterNeed === "Low"}
            required
          />
          <label htmlFor="waterNeed-low">Low</label>

          <input
            type="radio"
            id="waterNeed-medium"
            name="waterNeed"
            value="Medium"
            defaultChecked={plant.waterNeed === "Medium"}
          />
          <label htmlFor="waterNeed-medium">Medium</label>

          <input
            type="radio"
            id="waterNeed-high"
            name="waterNeed"
            value="High"
            defaultChecked={plant.waterNeed === "High"}
          />
          <label htmlFor="waterNeed-high">High</label>
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
            id="fertiliserSeason-spring"
            name="fertiliserSeason"
            value="Spring"
            defaultChecked={plant.fertiliserSeason?.includes("Spring")}
          ></input>
          <label htmlFor="fertiliserSeason-spring">Spring</label>
          <input
            type="checkbox"
            id="fertiliserSeason-summer"
            name="fertiliserSeason"
            value="Summer"
            defaultChecked={plant.fertiliserSeason?.includes("Summer")}
          ></input>
          <label htmlFor="fertiliserSeason-summer">Summer</label>
          <input
            type="checkbox"
            id="fertiliserSeason-autumn"
            name="fertiliserSeason"
            value="Autumn"
            defaultChecked={plant.fertiliserSeason?.includes("Autumn")}
          ></input>
          <label htmlFor="fertiliserSeason-autumn">Autumn</label>
          <input
            type="checkbox"
            id="fertiliserSeason-winter"
            name="fertiliserSeason"
            value="Winter"
            defaultChecked={plant.fertiliserSeason?.includes("Winter")}
          ></input>
          <label htmlFor="fertiliserSeason-winter">Winter</label>
        </fieldset>
        {isEditMode ? (
          <>
            <button type="submit">save</button>
            <button
              type="button"
              onClick={() => setShowEditForm(!showEditForm)}
            >
              cancel
            </button>
          </>
        ) : (
          <button type="submit">plant your plant</button>
        )}
      </fieldset>
    </form>
  );
}
