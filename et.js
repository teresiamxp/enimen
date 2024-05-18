import { useState, useCallback } from "react";

const useMove = () => {
  const [lastDirection, setLastDirection] = useState(null);

  const move = useCallback((direction) => {
    // Assuming 'direction' is a valid value that can be directly set
    setLastDirection(direction);
  }, []);

  const resetDirection = useCallback(() => {
    setLastDirection(null);
  }, []);

  return { move, lastDirection, resetDirection };
};

export default useMove;
