import { useState, useEffect } from "react";

/**
 * Returns isMobile / isTablet / isDesktop booleans
 * that update live on window resize.
 *
 * Mobile:  < 640px
 * Tablet:  640px – 1023px
 * Desktop: ≥ 1024px
 */
export function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    isMobile:  width < 640,
    isTablet:  width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}
