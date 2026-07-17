import { useState, useEffect } from "react";

export default function ImageViewer({
  scene,
  index,
  total,
  zoom,
  isFullscreen,
  onPrev,
  onNext,
  onZoomIn,
  onZoomOut,
  onToggleFullscreen
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setFailed(false);
  }, [scene.image]);

  return (
    <div className="viewer-card">
      <div className="viewer-card__head">
        <h2>
          <i className="fas fa-eye" aria-hidden="true" /> Visualización Actual
        </h2>
        <div className="icon-row">
          <button className="icon-btn" onClick={onZoomIn} title="Acercar" aria-label="Acercar">
            <i className="fas fa-search-plus" />
          </button>
          <button className="icon-btn" onClick={onZoomOut} title="Alejar" aria-label="Alejar">
            <i className="fas fa-search-minus" />
          </button>
          <button className="icon-btn" onClick={onToggleFullscreen} title="Pantalla completa" aria-label="Pantalla completa">
            <i className={`fas ${isFullscreen ? "fa-compress" : "fa-expand"}`} />
          </button>
        </div>
      </div>

      <div className="image-viewer">
        {!isLoaded && (
          <div className="image-loading">
            <div className="spinner" />
            <p>{failed ? "Imagen no disponible" : "Cargando vista…"}</p>
          </div>
        )}

        <img
          key={scene.image}
          className={`main-image${isLoaded ? " is-loaded" : ""}`}
          src={scene.image}
          alt={scene.title}
          style={{ transform: `scale(${zoom})` }}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            setFailed(true);
            setIsLoaded(true);
            e.target.src = `https://via.placeholder.com/1200x700/7A1836/FFFFFF?text=${encodeURIComponent(
              scene.title
            )}`;
          }}
        />

        <div className="image-viewer__frame" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="scene-indicator">
          Vista <b>{String(index + 1).padStart(2, "0")}</b> / {String(total).padStart(2, "0")}
        </div>

        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={onPrev}
          disabled={index === 0}
          aria-label="Vista anterior"
        >
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={onNext}
          disabled={index === total - 1}
          aria-label="Siguiente vista"
        >
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
