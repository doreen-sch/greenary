import Head from "next/head";
import PlantDetails from "@/components/PlantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Button from "@/components/Button";
import { SquareArrowLeft } from "lucide-react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function PlantDetailPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  const [plantFormEdit, setPlantFormEdit] = useState(plant);

  function handleSetPlantFormEdit(event) {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "fertiliserSeason") {
      setPlantFormEdit({
        ...plantFormEdit,
        [key]: plantFormEdit.fertiliserSeason.find((season) => season === value)
          ? plantFormEdit.fertiliserSeason.filter((season) => season !== value)
          : [...plantFormEdit.fertiliserSeason, value],
      });

      return;
    }

    setPlantFormEdit({ ...plantFormEdit, [key]: value });
  }

  async function handleEditPlant(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    plantData.fertiliserSeason = formData.getAll("fertiliserSeason");

    const response = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    if (response.ok) {
      mutate();
      setIsExpanded(!isExpanded);

      toast.success("Your plant 🪴 was successfully updated.");
    } else {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
      );
    }
  }

  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plant || error) {
    return (
      <>
        <Link href="/">
          <Button $variant="icon" aria-label="Back to Homepage Button">
            <SquareArrowLeft />
          </Button>
        </Link>
        <h1>Oops… something went wrong.</h1>
      </>
    );
  }

  async function handleDeletePlant() {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
      toast.success("Your plant 🥀 was successfully composted.");
    } else {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
      );
    }
  }

  function handleIsExpanded() {
    setIsExpanded(!isExpanded);
    setPlantFormEdit(plant);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.1 }}
    >
      <Head>
        <title>{plant.name}</title>
      </Head>
      <StyledDiv>
        <PlantDetails
          plant={plant}
          plantForm={plantFormEdit}
          isExpanded={isExpanded}
          onDeletePlant={handleDeletePlant}
          handleEditPlant={handleEditPlant}
          handleIsExpanded={handleIsExpanded}
          handleSetPlantForm={handleSetPlantFormEdit}
        />
      </StyledDiv>
    </motion.div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
