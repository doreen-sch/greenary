import styled from "styled-components";
import { LucideX, LucidePencil, LucidePlus } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function PlantFormButton({
  isExpanded,
  onIsExpanded,
  isEditMode,
}) {
  return (
    <StyledButton onClick={onIsExpanded}>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
          >
            <LucideX />
          </motion.span>
        ) : isEditMode ? (
          <motion.span
            key="pencil"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
          >
            <LucidePencil />
          </motion.span>
        ) : (
          <motion.span
            key="plus"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
            transition={{ duration: 0.2 }}
            style={{ display: "inline-flex" }}
          >
            <LucidePlus />
          </motion.span>
        )}
      </AnimatePresence>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 10%;
  color: var(--secondary-green-800);
  background-color: var(--secondary-green-50);
  border-color: var(--secondary-green-400);
`;

/*Animation */
const iconVariants = {
  initial: { scale: 0, opacity: 0, rotate: -90 },
  animate: { scale: 1, opacity: 1, rotate: 0 },
  exit: { scale: 0, opacity: 0, rotate: 90 },
};

const transitionSettings = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};
