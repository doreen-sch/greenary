import styled from "styled-components";

const StyledForm = styled.div`
  width: 30em;
  max-width: 90%;
  /* margin: 0 auto; */ /*centers the form */
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 0.4rem;
  width: 100%;
  line-height: 1.2;
  margin-top: 0.2rem;
`;

export default function PlantForm({
  plant,
  isEditMode,
  setShowEditForm,
  showEditForm,
  onSubmit,
}) {
  return (
    <div>
      <StyledForm
        onSubmit={onSubmit}
        aria-labelledby="Expand your Garden"
        aria-describedby="add a new plant"
      >
        <fieldset>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            defaultValue={plant.name}
            required
          />

          <StyledLabel htmlFor="botanicalName">Botanical Name: </StyledLabel>
          <StyledInput
            type="text"
            id="botanicalName"
            name="botanicalName"
            defaultValue={plant.botanicalName}
            required
          />

          <fieldset>
            <legend>Light needs</legend>

            <StyledInput
              type="radio"
              id="lightNeed-fullSun"
              name="lightNeed"
              value="Full Sun"
              defaultChecked={plant.lightNeed === "Full Sun"}
              required
            />
            <StyledLabel htmlFor="lightNeed-fullSun">Full Sun</StyledLabel>

            <StyledInput
              type="radio"
              id="lightNeed-partialShade"
              name="lightNeed"
              value="Partial Shade"
              defaultChecked={plant.lightNeed === "Partial Shade"}
            />
            <StyledLabel htmlFor="lightNeed-partialShade">
              Partial Shade
            </StyledLabel>

            <StyledInput
              type="radio"
              id="lightNeed-fullShade"
              name="lightNeed"
              value="Full Shade"
              defaultChecked={plant.lightNeed === "Full Shade"}
            />
            <StyledLabel htmlFor="lightNeed-fullShade">Full Shade</StyledLabel>
          </fieldset>

          <fieldset>
            <legend>Water needs</legend>

            <StyledInput
              type="radio"
              id="waterNeed-low"
              name="waterNeed"
              value="Low"
              defaultChecked={plant.waterNeed === "Low"}
              required
            />
            <StyledLabel htmlFor="waterNeed-low">Low</StyledLabel>

            <StyledInput
              type="radio"
              id="waterNeed-medium"
              name="waterNeed"
              value="Medium"
              defaultChecked={plant.waterNeed === "Medium"}
            />
            <StyledLabel htmlFor="waterNeed-medium">Medium</StyledLabel>

            <StyledInput
              type="radio"
              id="waterNeed-high"
              name="waterNeed"
              value="High"
              defaultChecked={plant.waterNeed === "High"}
            />
            <StyledLabel htmlFor="waterNeed-high">High</StyledLabel>
          </fieldset>

          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledInput
            type="text"
            id="description"
            name="description"
            defaultValue={plant.description}
            size={300}
          ></StyledInput>

          <fieldset>
            <legend>Fertiliser Season</legend>
            <StyledInput
              type="checkbox"
              id="fertiliserSeason-spring"
              name="fertiliserSeason"
              value="Spring"
              defaultChecked={plant.fertiliserSeason?.includes("Spring")}
            ></StyledInput>
            <StyledLabel htmlFor="fertiliserSeason-spring">Spring</StyledLabel>
            <StyledInput
              type="checkbox"
              id="fertiliserSeason-summer"
              name="fertiliserSeason"
              value="Summer"
              defaultChecked={plant.fertiliserSeason?.includes("Summer")}
            ></StyledInput>
            <StyledLabel htmlFor="fertiliserSeason-summer">Summer</StyledLabel>
            <StyledInput
              type="checkbox"
              id="fertiliserSeason-autumn"
              name="fertiliserSeason"
              value="Autumn"
              defaultChecked={plant.fertiliserSeason?.includes("Autumn")}
            ></StyledInput>
            <StyledLabel htmlFor="fertiliserSeason-autumn">Autumn</StyledLabel>
            <StyledInput
              type="checkbox"
              id="fertiliserSeason-winter"
              name="fertiliserSeason"
              value="Winter"
              defaultChecked={plant.fertiliserSeason?.includes("Winter")}
            ></StyledInput>
            <StyledLabel htmlFor="fertiliserSeason-winter">Winter</StyledLabel>
          </fieldset>
          {isEditMode ? (
            <>
              <button type="submit">save edits</button>
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
      </StyledForm>
    </div>
  );
}
