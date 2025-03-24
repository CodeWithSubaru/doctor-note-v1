import React, { PropsWithChildren } from "react";

function FadeIn({
  delay,
  isAnimationRevealed = true,
  children,
}: { delay?: number; isAnimationRevealed?: boolean } & PropsWithChildren) {
  return (
    <div
      className={`${
        isAnimationRevealed ? `fadeIn delay-${delay}` : "invisible"
      }`}
    >
      {children}
    </div>
  );
}

export default FadeIn;
