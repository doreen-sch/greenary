import styled from "styled-components";
import PlantNeeds from "../PlantNeeds";

export default function PlantForm({
  plant,
  isEditMode,
  onSetPlantForm,
  onSubmit,
  onClearPlant,
  onCancelEdit,
  // onShowEditForm,
}) {
  console.log("form water need", plant);
  return (
    <StyledForm
      onSubmit={onSubmit}
      aria-labelledby="Expand your Garden"
      aria-describedby="add a new plant"
    >
      <StyledFieldset>
        <StyledNameWrapper aria-label="name and botanical name">
          <StyledLabel htmlFor="name">
            Name<span aria-hidden="true">*</span>
          </StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            defaultValue={plant?.name}
            required
            onChange={onSetPlantForm}
          />

          <StyledLabel htmlFor="botanicalName">
            Botanical Name<span aria-hidden="true">*</span>
          </StyledLabel>
          <StyledInput
            type="text"
            id="botanicalName"
            name="botanicalName"
            defaultValue={plant?.botanicalName}
            required
            onChange={onSetPlantForm}
          />
        </StyledNameWrapper>

        <StyledFieldset>
          <PlantNeeds
            plant={plant}
            need={"waterNeed"}
            onSetPlantForm={onSetPlantForm}
          ></PlantNeeds>

          <PlantNeeds
            plant={plant}
            need={"lightNeed"}
            onSetPlantForm={onSetPlantForm}
          ></PlantNeeds>

          {/* <PlantNeeds
            onSetPlant={onSetPlantForm}
            need={"fertiliserSeason"}
            plant={plant}
          ></PlantNeeds> */}
        </StyledFieldset>

        <fieldset>
          <legend>Light needs</legend>

          <StyledInput
            type="radio"
            id="lightNeed-fullSun"
            name="lightNeed"
            value="Full Sun"
            defaultChecked={plant?.lightNeed === "Full Sun"}
            onChange={onSetPlantForm}
            required
          />
          <StyledLabel htmlFor="lightNeed-fullSun">Full Sun</StyledLabel>

          <StyledInput
            type="radio"
            id="lightNeed-partialShade"
            name="lightNeed"
            value="Partial Shade"
            defaultChecked={plant?.lightNeed === "Partial Shade"}
            onChange={onSetPlantForm}
          />
          <StyledLabel htmlFor="lightNeed-partialShade">
            Partial Shade
          </StyledLabel>

          <StyledInput
            type="radio"
            id="lightNeed-fullShade"
            name="lightNeed"
            value="Full Shade"
            defaultChecked={plant?.lightNeed === "Full Shade"}
            onChange={onSetPlantForm}
          />
          <StyledLabel htmlFor="lightNeed-fullShade">Full Shade</StyledLabel>
        </fieldset>

        {/* <fieldset>
          <legend>Water needs</legend>

          <StyledInput
            type="radio"
            id="waterNeed-low"
            name="waterNeed"
            value="Low"
            defaultChecked={plant?.waterNeed === "Low"}
            onChange={onSetPlantForm}
            required
          />
          <StyledLabel htmlFor="waterNeed-low">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-droplet-icon lucide-droplet"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </StyledLabel>

          <StyledInput
            type="radio"
            id="waterNeed-medium"
            name="waterNeed"
            value="Medium"
            defaultChecked={plant?.waterNeed === "Medium"}
            onChange={onSetPlantForm}
          />
          <StyledLabel htmlFor="waterNeed-medium">Medium</StyledLabel>

          <StyledInput
            type="radio"
            id="waterNeed-high"
            name="waterNeed"
            value="High"
            defaultChecked={plant?.waterNeed === "High"}
            onChange={onSetPlantForm}
          />
          <StyledLabel htmlFor="waterNeed-high">High</StyledLabel>
        </fieldset> */}

        <fieldset>
          <legend>Fertiliser Season</legend>
          <StyledInput
            type="checkbox"
            id="fertiliserSeason-spring"
            name="fertiliserSeason"
            value="Spring"
            defaultChecked={plant?.fertiliserSeason?.includes("Spring")}
            onChange={onSetPlantForm}
          ></StyledInput>
          <StyledLabel htmlFor="fertiliserSeason-spring">Spring</StyledLabel>
          <StyledInput
            type="checkbox"
            id="fertiliserSeason-summer"
            name="fertiliserSeason"
            value="Summer"
            defaultChecked={plant?.fertiliserSeason?.includes("Summer")}
            onChange={onSetPlantForm}
          ></StyledInput>
          <StyledLabel htmlFor="fertiliserSeason-summer">Summer</StyledLabel>
          <StyledInput
            type="checkbox"
            id="fertiliserSeason-autumn"
            name="fertiliserSeason"
            value="Autumn"
            defaultChecked={plant?.fertiliserSeason?.includes("Autumn")}
            onChange={onSetPlantForm}
          ></StyledInput>
          <StyledLabel htmlFor="fertiliserSeason-autumn">Autumn</StyledLabel>
          <StyledInput
            type="checkbox"
            id="fertiliserSeason-winter"
            name="fertiliserSeason"
            value="Winter"
            defaultChecked={plant?.fertiliserSeason?.includes("Winter")}
            onChange={onSetPlantForm}
          ></StyledInput>
          <StyledLabel htmlFor="fertiliserSeason-winter">Winter</StyledLabel>
        </fieldset>

        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledTextarea
          id="description"
          name="description"
          defaultValue={plant?.description}
          onChange={onSetPlantForm}
          size={300}
          cols={45}
          rows={10}
        ></StyledTextarea>
        {isEditMode ? (
          <>
            <button type="submit">save edits</button>
            <button type="button" onClick={onCancelEdit}>
              cancel
            </button>
          </>
        ) : (
          <>
            <button type="reset" onClick={onClearPlant}>
              clear form
            </button>
            <button type="submit">plant your plant</button>
          </>
        )}
      </StyledFieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 25em;
  max-width: 90%;
  /* margin: 0 auto; */ /*centers the form */
`;

const StyledFieldset = styled.fieldset`
  border-radius: var(--border-radius-input-field);
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
  border-radius: var(--border-radius-input-field);
`;

const StyledNameWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  align-items: center;
  gap: 1rem;
`;

const StyledTextarea = styled.textarea`
  border-radius: var(--border-radius-input-field);
`;
