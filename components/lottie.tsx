import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "../public/animation2.json";

interface LottieAnimationProps {
  animationData: any;
}

function Lotties() {
  const container = useRef<HTMLDivElement>(null);
  let animation: AnimationItem | null = null;

  useEffect(() => {
    if (container.current) {
      animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      animation?.destroy();
      animation = null;
    };
  }, []);

  return (
    <div
      ref={container}
      className="w-[300px] md:w-[500px] h-[100vh] flex justify-center items-center"
      style={{ margin: "0 auto" }}
    />
  );
}

export default Lotties;
