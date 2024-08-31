import React from "react";

function CoolText({ children }: { children: React.ReactNode }) {
  // @ts-expect-error Marquee is deprecated
  return <marquee>{children}</marquee>;
}

export default CoolText;
