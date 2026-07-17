export default function Footer({ onFullscreen, isFullscreen }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <div>
            <p className="eyebrow" style={{ marginBottom: 8 }}>
              Instituto Politécnico Nacional
            </p>
            <p className="site-footer__desc">
              Plataforma educativa de recorrido virtual desarrollada para fines académicos, como
              proyecto de innovación educativa de la Escuela Superior de Cómputo.
            </p>
          </div>
        </div>

        <div className="site-footer__contact">
          <span>
            <i className="fas fa-envelope" /> ser_estudiantiles_escom@ipn.mx
          </span>
          <span>
            <i className="fas fa-globe" /> escom.ipn.mx/htmls/escomunidad/biblioteca.php
          </span>
          <span>
            <i className="fas fa-phone" /> 57 29 6000
          </span>
        </div>

        <div className="site-footer__actions">
          <button onClick={onFullscreen}>
            <i className={`fas ${isFullscreen ? "fa-compress" : "fa-expand"}`} />
            {isFullscreen ? "Salir de Pantalla Completa" : "Pantalla Completa"}
          </button>
        </div>
      </div>

      <div className="site-footer__copyright">
        <span>© {new Date().getFullYear()} Instituto Politécnico Nacional. Todos los derechos reservados.</span>
        <span>Uso exclusivamente educativo.</span>
      </div>
    </footer>
  );
}
