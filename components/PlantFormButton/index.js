import styled from "styled-components";
import { LucideX, LucidePencil, LucidePlus } from "lucide-react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";

export default function PlantFormButton({
  isExpanded,
  onIsExpanded,
  isEditMode,
}) {
  return (
    <Button $variant="icon" onClick={onIsExpanded}>
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
            <StyledLucidePlus />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

const StyledLucidePlus = styled(LucidePlus)`
  width: var(--button-width);
  height: var(--button-height);
`;
