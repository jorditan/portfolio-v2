import { useState, useEffect, useCallback } from "react";
import { useCarousel } from "@/common/hooks/useCarousel";

/**
 * Hook especializado para la experiencia del detalle del proyecto:
 * Administra carrusel, visor modal (lightbox), bloqueo de scroll del body y navegación por teclado.
 * @param {number} totalImages - Cantidad total de imágenes.
 */
export function useProjectDetailCarousel(totalImages) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const carousel = useCarousel(totalImages);
  const { goToNext, goToPrevious } = carousel;

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  // Efecto de bloqueo de scroll del body y eventos de teclado
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isLightboxOpen, goToNext, goToPrevious, closeLightbox]);

  return {
    ...carousel,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    mounted,
  };
}
