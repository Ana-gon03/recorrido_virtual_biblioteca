export default function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal__head">
          <h3>
            <i className="fas fa-question-circle" /> Guía de Uso
          </h3>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">
            &times;
          </button>
        </div>
        <div className="modal__body">
          <div className="guide-section">
            <h4>
              <i className="fas fa-mouse-pointer" /> Navegación
            </h4>
            <ul>
              <li>Use "Vista Anterior" y "Siguiente Vista" para moverse entre áreas.</li>
              <li>Haga clic en los puntos azules sobre la imagen para saltar a vistas relacionadas.</li>
              <li>Haga clic en cualquier nodo de la Línea de Recorrido para ir directo a esa vista.</li>
              <li>
                Use <kbd>←</kbd> y <kbd>→</kbd> para navegar rápidamente.
              </li>
            </ul>
          </div>
          <div className="guide-section">
            <h4>
              <i className="fas fa-play-circle" /> Recorrido Automático
            </h4>
            <p>
              Active el modo automático para una experiencia guiada que avanza cada vista cada 5
              segundos. También puede iniciarlo con la barra espaciadora <kbd>Espacio</kbd>.
            </p>
          </div>
          <div className="guide-section">
            <h4>
              <i className="fas fa-search" /> Visualización
            </h4>
            <ul>
              <li>
                Zoom con <kbd>+</kbd> / <kbd>-</kbd>, restablecer con <kbd>0</kbd>.
              </li>
              <li>Pantalla completa muestra solo las imágenes del recorrido, sin el resto de la interfaz.</li>
              <li>Reiniciar vuelve al punto de inicio del recorrido.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
