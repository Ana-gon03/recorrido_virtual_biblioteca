export default function ControlPanel({ isAutoplay, onToggleAutoplay, onReset, onHelp }) {
  return (
    <div className="panel">
      <div className="panel__head">
        <h3>
          <i className="fas fa-compass" /> Controles
        </h3>
      </div>
      <div className="panel__body">
        <button className={`btn btn-primary${isAutoplay ? " is-active" : ""}`} onClick={onToggleAutoplay}>
          <i className={`fas ${isAutoplay ? "fa-pause" : "fa-play"}`} />
          {isAutoplay ? "Pausar Recorrido" : "Recorrido Automático"}
        </button>
        <div className="btn-row">
          <button className="btn" onClick={onReset}>
            <i className="fas fa-redo" /> Reiniciar
          </button>
          <button className="btn" onClick={onHelp}>
            <i className="fas fa-question-circle" /> Ayuda
          </button>
        </div>
      </div>
    </div>
  );
}
