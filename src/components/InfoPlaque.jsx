import { scenes } from "../data/scenes";

export default function InfoPlaque({ scene, index, total, onGoToId }) {
  return (
    <div className="plaque">
      <div className="plaque__index">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <h2 className="plaque__title">{scene.title}</h2>
      <p className="plaque__desc">{scene.description}</p>

      {scene.hotspots.length > 0 && (
        <div className="plaque__connects">
          <h4>Conecta con</h4>
          <ul>
            {scene.hotspots.map((h, i) => {
              const target = scenes.find((s) => s.id === h.target);
              return (
                <li key={i}>
                  <button onClick={() => onGoToId(h.target)}>
                    <i className="fas fa-arrow-right" />
                    {target ? target.title : h.info}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
