import { useState, useRef, useCallback } from "react";

/**
 * Hook reutilizable para administrar la lógica de navegación de carruseles e interacciones táctiles.
 * @param {number} total - Cantidad total de elementos en el carrusel.
 * @param {number} initialIndex - Índice inicial (default: 0).
 */
export function useCarousel(total, initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const touchStartX = useRef(null);

  const goToPrevious = useCallback(() => {
    if (total <= 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToNext = useCallback(() => {
    if (total <= 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToIndex = useCallback(
    (index) => {
      if (index >= 0 && index < total) {
        setActiveIndex(index);
      }
    },
    [total]
  );

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) goToNext();
        else goToPrevious();
      }
      touchStartX.current = null;
    },
    [goToNext, goToPrevious]
  );

  return {
    activeIndex,
    goToNext,
    goToPrevious,
    goToIndex,
    handleTouchStart,
    handleTouchEnd,
  };
}
