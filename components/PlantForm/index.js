import styled from "styled-components";
import PlantNeeds from "../PlantNeeds";
import PlantFertiliserSeason from "../PlantFertiliserSeason";
import PopoverCard from "../Popover";
import Button from "../Button";

export default function PlantForm({
  title,
  plant,
  isEditMode,
  onSetPlantForm,
  onSubmit,
  onClearPlant,
  onCancelEdit,
}) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      aria-labelledby="Expand your Garden"
      aria-describedby="add a new plant"
    >
      <StyledFieldsetMain>
        <StyledTitle>{title}</StyledTitle>

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

        <StyledFieldsetNeeds>
          <legend>
            <PopoverCard />
          </legend>

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

          <PlantFertiliserSeason
            plant={plant}
            onSetPlantForm={onSetPlantForm}
          ></PlantFertiliserSeason>
        </StyledFieldsetNeeds>

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
        <StyledButtonWrapper>
          {isEditMode ? (
            <>
              <Button type="submit">Save & Close</Button>
              <Button type="button" $variant="cancel" onClick={onCancelEdit}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <fieldset>
                <legend>Image</legend>
                <label htmlFor="image">Upload:</label>
                <input id="image" name="image" type="file" accept="image/*" />
                <p>optional – supported formats: JPG, PNG, WEBP.</p>
              </fieldset>
              <Button type="submit">Plant your plant</Button>
              <Button type="reset" $variant="clear" onClick={onClearPlant}>
                Clear
              </Button>
            </>
          )}
        </StyledButtonWrapper>
      </StyledFieldsetMain>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 90%;
`;

const StyledFieldsetNeeds = styled.fieldset`
  margin: 1rem 0;
  border-radius: var(--border-radius-input-field);
  border: 0.1rem solid var(--primary-grey-200);
  background-color: white;
`;

const StyledFieldsetMain = styled.fieldset`
  border-radius: var(--border-radius-input-field);
  padding: 0 1rem;
  border: 2px outset var(--secondary-green-500);
  box-shadow: 5px 5px 20px var(--primary-grey-400);
  margin: 0;
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin: 1rem 0 2rem 0;
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
  outline: none;
  border: 0.1rem solid var(--primary-grey-200);

  &:focus {
    border-color: var(--secondary-green-500);
    box-shadow: 0 0 5px var(--secondary-green-700);
  }
`;

const StyledNameWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const StyledTextarea = styled.textarea`
  border-radius: var(--border-radius-input-field);
  outline: none;
  border: 0.1rem solid var(--primary-grey-200);
  font-family: Arial, Helvetica, sans-serif;

  &:focus {
    border-color: var(--secondary-green-500);
    box-shadow: 0 0 5px var(--secondary-green-500);
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
`;
