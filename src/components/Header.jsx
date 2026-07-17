export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <div className="brand-mark">
            <img src="/imagenes/logo_escom.png" alt="" onError={(e) => (e.target.style.display = "none")} />
          </div>
          <div className="brand-names">
            <span>Instituto Politécnico Nacional</span>
            <span>Escuela Superior de Cómputo</span>
          </div>
          <div className="brand-divider" />
        </div>

        <div className="site-header__title">
          <p className="eyebrow" style={{ marginBottom: 6 }}>
            Recorrido virtual · Biblioteca ESCOM
          </p>
          <h1>Directorio de Salas</h1>
          <p>Una visita guiada por los espacios de la biblioteca</p>
        </div>

        <div className="site-header__meta">
          <div>
            Ubicación
            <span>ESCOM, IPN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
