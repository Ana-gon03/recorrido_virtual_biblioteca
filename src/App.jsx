import { useTour } from "./hooks/useTour";
import Header from "./components/Header";
import ImageViewer from "./components/ImageViewer";
import RouteRail from "./components/RouteRail";
import InfoPlaque from "./components/InfoPlaque";
import ControlPanel from "./components/ControlPanel";
import ThumbnailPanel from "./components/ThumbnailPanel";
import HelpModal from "./components/HelpModal";
import Footer from "./components/Footer";

export default function App() {
  const {
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
    resetTour,
    toggleHelp,
    toggleFullscreen
  } = useTour();

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section>
          <div className="viewer-fullscreen" ref={containerRef}>
            <ImageViewer
              scene={scene}
              index={currentIndex}
              total={scenes.length}
              zoom={zoom}
              isFullscreen={isFullscreen}
              onPrev={goPrev}
              onNext={goNext}
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              onToggleFullscreen={toggleFullscreen}
            />
          </div>
          <RouteRail scenes={scenes} currentIndex={currentIndex} onGoTo={goTo} />
        </section>

        <aside className="sidebar">
          <InfoPlaque scene={scene} index={currentIndex} total={scenes.length} onGoToId={goToId} />
          <ControlPanel isAutoplay={isAutoplay} onToggleAutoplay={toggleAutoplay} onReset={resetTour} onHelp={toggleHelp} />
          <ThumbnailPanel scenes={scenes} currentIndex={currentIndex} onGoTo={goTo} />
        </aside>
      </main>

      <Footer onFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />

      {isHelpOpen && <HelpModal onClose={toggleHelp} />}
    </div>
  );
}
