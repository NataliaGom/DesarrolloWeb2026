const estilos = {
  default: {
    card: { background: "#ffffff", border: "1px solid #dee2e6", borderRadius: "0.75rem" },
    badge: { background: "#0d6efd", color: "#fff" },
    titulo: { color: "#212529", fontFamily: "inherit" },
    metaBox: { background: "#f8f9fa", borderRadius: "0.5rem" },
    metaLabel: { color: "#6c757d" },
    metaValue: { color: "#212529" },
    texto: { color: "#343a40" },
    boton: { background: "#0d6efd", color: "#fff", border: "none", borderRadius: "0.375rem" },
    etiqueta: "DEFAULT",
  },
  vintage: {
    card: { background: "#f5e6c8", border: "3px solid #8b6914", borderRadius: "0.25rem", boxShadow: "4px 4px 0 #8b6914" },
    badge: { background: "#8b6914", color: "#f5e6c8" },
    titulo: { color: "#5c3d11", fontFamily: "Georgia, serif", fontStyle: "italic" },
    metaBox: { background: "#e8d5a3", borderRadius: "0.25rem", border: "1px solid #c9a84c" },
    metaLabel: { color: "#7a5c2e", textTransform: "uppercase", letterSpacing: "0.05em" },
    metaValue: { color: "#5c3d11", fontFamily: "Georgia, serif" },
    texto: { color: "#5c3d11", fontFamily: "Georgia, serif", lineHeight: "1.8" },
    boton: { background: "#8b6914", color: "#f5e6c8", border: "2px solid #5c3d11", borderRadius: "0.25rem", fontFamily: "Georgia, serif" },
    etiqueta: "VINTAGE",
  },
  elegante: {
    card: { background: "#1a1a2e", border: "1px solid #c9a84c", borderRadius: "0.5rem", boxShadow: "0 0 20px rgba(201,168,76,0.3)" },
    badge: { background: "#c9a84c", color: "#1a1a2e" },
    titulo: { color: "#e8d5a3", fontFamily: "'Times New Roman', serif", letterSpacing: "0.05em" },
    metaBox: { background: "#16213e", borderRadius: "0.25rem", border: "1px solid #c9a84c" },
    metaLabel: { color: "#c9a84c", letterSpacing: "0.1em" },
    metaValue: { color: "#e8d5a3", fontFamily: "'Times New Roman', serif" },
    texto: { color: "#d4c5a9", fontFamily: "'Times New Roman', serif", lineHeight: "1.9" },
    boton: { background: "transparent", color: "#c9a84c", border: "1px solid #c9a84c", borderRadius: "0.25rem", letterSpacing: "0.1em" },
    etiqueta: "ELEGANTE",
  },
  anime: {
    card: { background: "linear-gradient(135deg, #fff0f5 0%, #e8f4ff 100%)", border: "3px solid #ff6eb4", borderRadius: "1.5rem", boxShadow: "0 4px 15px rgba(255,110,180,0.4)" },
    badge: { background: "#ff6eb4", color: "#fff" },
    titulo: { color: "#cc0066", fontFamily: "'Comic Sans MS', cursive", fontWeight: "bold" },
    metaBox: { background: "rgba(255,255,255,0.7)", borderRadius: "1rem", border: "2px solid #a8d8ea" },
    metaLabel: { color: "#0099cc", fontWeight: "bold" },
    metaValue: { color: "#cc0066", fontFamily: "'Comic Sans MS', cursive" },
    texto: { color: "#444", fontFamily: "'Comic Sans MS', cursive", lineHeight: "1.7" },
    boton: { background: "linear-gradient(90deg,#ff6eb4,#a78bfa)", color: "#fff", border: "none", borderRadius: "2rem", fontWeight: "bold" },
    etiqueta: "✨ ANIME",
  },
  minimalista: {
    card: { background: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "0", boxShadow: "none" },
    badge: { background: "#000", color: "#fff", borderRadius: "0", fontWeight: "300", letterSpacing: "0.2em" },
    titulo: { color: "#111", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: "300", letterSpacing: "0.02em" },
    metaBox: { background: "#f9f9f9", borderRadius: "0", border: "none", borderLeft: "2px solid #111" },
    metaLabel: { color: "#999", fontSize: "0.7rem", letterSpacing: "0.15em" },
    metaValue: { color: "#111", fontWeight: "300" },
    texto: { color: "#444", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: "300", lineHeight: "1.9" },
    boton: { background: "#111", color: "#fff", border: "none", borderRadius: "0", fontWeight: "300", letterSpacing: "0.1em" },
    etiqueta: "MINIMALISTA",
  },
  caricatura: {
    card: { background: "#fff9c4", border: "4px solid #222", borderRadius: "1rem", boxShadow: "6px 6px 0 #222" },
    badge: { background: "#ff5252", color: "#fff", border: "2px solid #222", borderRadius: "0.5rem" },
    titulo: { color: "#222", fontFamily: "'Comic Sans MS', cursive", fontWeight: "bold", textShadow: "2px 2px 0 #ffeb3b" },
    metaBox: { background: "#b2ebf2", borderRadius: "0.75rem", border: "2px solid #222" },
    metaLabel: { color: "#00695c", fontWeight: "bold", fontFamily: "'Comic Sans MS', cursive" },
    metaValue: { color: "#222", fontFamily: "'Comic Sans MS', cursive", fontWeight: "bold" },
    texto: { color: "#333", fontFamily: "'Comic Sans MS', cursive", lineHeight: "1.7" },
    boton: { background: "#ffeb3b", color: "#222", border: "3px solid #222", borderRadius: "0.75rem", fontFamily: "'Comic Sans MS', cursive", fontWeight: "bold", boxShadow: "3px 3px 0 #222" },
    etiqueta: "CARICATURA",
  },
  disney: {
    card: { background: "linear-gradient(135deg, #0d1b6e 0%, #1a1a8c 50%, #4a0080 100%)", border: "2px solid #ffd700", borderRadius: "1rem", boxShadow: "0 0 25px rgba(255,215,0,0.5), inset 0 0 30px rgba(255,255,255,0.05)" },
    badge: { background: "#ffd700", color: "#0d1b6e", fontWeight: "bold" },
    titulo: { color: "#ffd700", fontFamily: "'Times New Roman', serif", fontWeight: "bold", textShadow: "0 0 10px rgba(255,215,0,0.8)", letterSpacing: "0.05em" },
    metaBox: { background: "rgba(255,255,255,0.1)", borderRadius: "0.75rem", border: "1px solid rgba(255,215,0,0.4)" },
    metaLabel: { color: "#ffd700", letterSpacing: "0.1em" },
    metaValue: { color: "#fff", fontFamily: "'Times New Roman', serif" },
    texto: { color: "#e8e8ff", fontFamily: "'Times New Roman', serif", lineHeight: "1.8" },
    boton: { background: "linear-gradient(90deg,#ffd700,#ff8c00)", color: "#0d1b6e", border: "none", borderRadius: "2rem", fontWeight: "bold", boxShadow: "0 4px 15px rgba(255,215,0,0.4)" },
    etiqueta: "✨ DISNEY",
  },
  fosforescente: {
    card: { background: "#0a0a0a", border: "2px solid #00ff41", borderRadius: "0.5rem", boxShadow: "0 0 20px #00ff41, 0 0 40px rgba(0,255,65,0.3), inset 0 0 20px rgba(0,255,65,0.05)" },
    badge: { background: "#00ff41", color: "#0a0a0a", fontWeight: "bold", fontFamily: "monospace" },
    titulo: { color: "#00ff41", fontFamily: "monospace", textShadow: "0 0 10px #00ff41, 0 0 20px #00ff41", letterSpacing: "0.1em" },
    metaBox: { background: "#111", borderRadius: "0.25rem", border: "1px solid #00ff41", boxShadow: "inset 0 0 10px rgba(0,255,65,0.1)" },
    metaLabel: { color: "#00ccff", fontFamily: "monospace", letterSpacing: "0.1em", textShadow: "0 0 5px #00ccff" },
    metaValue: { color: "#00ff41", fontFamily: "monospace", textShadow: "0 0 5px #00ff41" },
    texto: { color: "#b0ffb0", fontFamily: "monospace", lineHeight: "1.8" },
    boton: { background: "transparent", color: "#00ff41", border: "2px solid #00ff41", borderRadius: "0.25rem", fontFamily: "monospace", letterSpacing: "0.1em", textShadow: "0 0 8px #00ff41", boxShadow: "0 0 10px rgba(0,255,65,0.4)" },
    etiqueta: "FOSFORESCENTE",
  },
};

export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
  estilo = "default",
}) {
  const s = estilos[estilo] ?? estilos.default;

  return (
    <div style={{ ...s.card, padding: "0" }} className="my-3">
      <div style={{ padding: "1.5rem" }}>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <span
              className="badge align-self-start text-uppercase"
              style={s.badge}
            >
              {s.etiqueta}
            </span>
            <h2 style={s.titulo} className="mb-0">{titulo}</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col">
              <div style={{ ...s.metaBox, padding: "0.75rem", height: "100%" }}>
                <p className="mb-1 small text-uppercase fw-semibold" style={s.metaLabel}>
                  Fecha
                </p>
                <p className="mb-0 fw-medium" style={s.metaValue}>{fecha}</p>
              </div>
            </div>
            <div className="col">
              <div style={{ ...s.metaBox, padding: "0.75rem", height: "100%" }}>
                <p className="mb-1 small text-uppercase fw-semibold" style={s.metaLabel}>
                  Tipo de contenido
                </p>
                <p className="mb-0 fw-medium text-capitalize" style={s.metaValue}>{tipoContenido}</p>
              </div>
            </div>
          </div>

          <p className="lead mb-0" style={s.texto}>{explicacion}</p>

          <div>
            <a
              style={s.boton}
              className="btn"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver recurso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

