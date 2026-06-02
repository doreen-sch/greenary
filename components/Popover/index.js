import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover";
import { Info } from "lucide-react";

export default function PopoverCard() {
  return (
    <Root>
      <Trigger asChild>
        <button aria-label="Update dimensions">
          <Info />
        </button>
      </Trigger>
      <Portal>
        <Content sideOffset={5}>
          <p>Helo from the Popover.</p>
          <Close aria-label="Close"></Close>
          <Arrow />
        </Content>
      </Portal>
    </Root>
  );
}
