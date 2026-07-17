export default function RouteRail({ scenes, currentIndex, onGoTo }) {
  const progressPct = (currentIndex / (scenes.length - 1)) * 100;

  return (
    <div className="route-rail">
      <div className="route-rail__head">
        <h2>
          <i className="fas fa-route" aria-hidden="true" /> Línea de Recorrido
        </h2>
        <span>{Math.round(((currentIndex + 1) / scenes.length) * 100)}% completado</span>
      </div>

      <div className="route-rail__track">
        <div className="route-rail__line" style={{ width: `${scenes.length * 36}px` }}>
          <div className="route-rail__progress" style={{ width: `${progressPct}%` }} />
          {scenes.map((s, i) => (
            <button
              key={s.id}
              className={`route-node${i === currentIndex ? " is-active" : ""}${
                i < currentIndex ? " is-visited" : ""
              }`}
              onClick={() => onGoTo(i)}
              title={s.title}
            >
              <span className="route-node__dot" />
              <span className="route-node__label">
                {String(i + 1).padStart(2, "0")} · {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
