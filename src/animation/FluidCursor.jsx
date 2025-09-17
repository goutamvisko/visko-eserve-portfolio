import { useEffect } from "react";
import useFluidCursor from "../hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    const cleanup = useFluidCursor(); // init effect

    return () => {
      // optional cleanup if hook returns a destroy function
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]">
      <canvas id="fluid" className="w-full h-full" />
    </div>
  );
};

export default FluidCursor;
