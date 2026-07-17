import { useState, useRef, useEffect, useCallback } from "react";
import { scenes } from "../data/scenes";

const AUTOPLAY_MS = 5000;
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.1;

export function useTour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const scene = scenes[currentIndex];

  const goTo = useCallback((index) => {
    setCurrentIndex((prev) => {
      if (index < 0 || index >= scenes.length) return prev;
      return index;
    });
    setZoom(1);
  }, []);

  const goToId = useCallback(
    (id) => {
      const idx = scenes.findIndex((s) => s.id === id);
      if (idx !== -1) goTo(idx);
    },
    [goTo]
  );

  const goNext = useCallback(() => goTo(Math.min(currentIndex + 1, scenes.length - 1)), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(Math.max(currentIndex - 1, 0)), [currentIndex, goTo]);

  const toggleAutoplay = useCallback(() => setIsAutoplay((v) => !v), []);

  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % scenes.length);
        setZoom(1);
      }, AUTOPLAY_MS);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoplay]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2))), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2))), []);
  const resetZoom = useCallback(() => setZoom(1), []);

  const resetTour = useCallback(() => {
    setIsAutoplay(false);
    setZoom(1);
    goTo(0);
  }, [goTo]);

  const toggleHelp = useCallback(() => setIsHelpOpen((v) => !v), []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      (el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen)?.call(el);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen)?.call(document);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Navegación por teclado
  useEffect(() => {
    const handler = (e) => {
      if (isHelpOpen && e.key !== "Escape" && e.key !== "h" && e.key !== "H") return;
      switch (e.key) {
        case "ArrowLeft":
          goPrev();
          break;
        case "ArrowRight":
          goNext();
          break;
        case " ":
          e.preventDefault();
          toggleAutoplay();
          break;
        case "Escape":
          if (document.fullscreenElement) toggleFullscreen();
          if (isHelpOpen) setIsHelpOpen(false);
          break;
        case "+":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "0":
          resetZoom();
          break;
        case "h":
        case "H":
          toggleHelp();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [goPrev, goNext, toggleAutoplay, toggleFullscreen, zoomIn, zoomOut, resetZoom, toggleHelp, isHelpOpen]);

  return {
    scenes,
    scene,
    currentIndex,
    zoom,
    isAutoplay,
    isHelpOpen,
    isFullscreen,
    containerRef,
    goTo,
    goToId,
    goNext,
    goPrev,
    toggleAutoplay,
    zoomIn,
    zoomOut,
    resetZoom,
    resetTour,
    toggleHelp,
    toggleFullscreen
  };
}
