import React, { PropsWithChildren } from "react";

function RevealedUp({
  delay,
  isAnimationRevealed = true,
  children,
}: { delay?: number; isAnimationRevealed: boolean } & PropsWithChildren) {
  return (
    <div
      className={`${
        isAnimationRevealed ? `revealedUp delay-${delay}` : "invisible"
      }`}
    >
      {children}
    </div>
  );
}

export default RevealedUp;
