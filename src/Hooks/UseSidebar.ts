import { useState } from "react";

export function UseSidebar() {
  const [Mode, setMode] = useState<boolean>(false);
  return {
    Mode,
    setMode,
  };
}
