import { useMemo } from "react";
import { StarsProps } from "@/components/ui/stars/Stars";

type useStarsProps = Pick<StarsProps, "activeStars"> & Required<Pick<StarsProps, "maxStars">>;

const useStars = ({ activeStars: _activeStars, maxStars }: useStarsProps) => {
  const floatPart = _activeStars % 1;
  const activeStars = useMemo(() => {
    if (floatPart === 0) {
      return _activeStars;
    }
    return Math.floor(_activeStars);
  }, [_activeStars, floatPart]);

  const halfActiveStars = useMemo(() => {
    if (floatPart === 0) {
      return 0;
    }
    return floatPart >= 0.5 ? 1 : 0;
  }, [floatPart]);

  const inactiveStars = useMemo(() => {
    return maxStars - activeStars - halfActiveStars;
  }, [activeStars, maxStars, halfActiveStars]);

  return {
    activeStars,
    inactiveStars,
    halfActiveStars
  };
};

export default useStars;
