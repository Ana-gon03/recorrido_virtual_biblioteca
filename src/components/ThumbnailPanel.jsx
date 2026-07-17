export default function ThumbnailPanel({ scenes, currentIndex, onGoTo }) {
  return (
    <div className="panel">
      <div className="panel__head">
        <h3>
          <i className="fas fa-th" /> Vistas Disponibles
        </h3>
        <span className="eyebrow">
          {currentIndex + 1}/{scenes.length}
        </span>
      </div>
      <div className="panel__body">
        <div className="thumbnails">
          {scenes.map((s, i) => (
            <div
              key={s.id}
              className={`thumbnail${i === currentIndex ? " is-active" : ""}`}
              onClick={() => onGoTo(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onGoTo(i)}
            >
              <img
                src={s.thumbnail || s.image}
                alt={s.title}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/100x75/7A1836/FFFFFF?text=${i + 1}`;
                }}
              />
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
