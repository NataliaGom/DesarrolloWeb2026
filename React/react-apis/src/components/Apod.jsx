export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
}) {
  return (
    <div className="card shadow-sm border-0 my-4">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <span className="badge text-bg-primary align-self-start text-uppercase">
              APOD
            </span>
            <h2 className="card-title mb-0">{titulo}</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col">
              <div className="p-3 bg-body-tertiary rounded-3 h-100">
                <p className="mb-1 text-body-secondary small text-uppercase fw-semibold">
                  Fecha
                </p>
                <p className="mb-0 fw-medium">{fecha}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bg-body-tertiary rounded-3 h-100">
                <p className="mb-1 text-body-secondary small text-uppercase fw-semibold">
                  Tipo de contenido
                </p>
                <p className="mb-0 fw-medium text-capitalize">{tipoContenido}</p>
              </div>
            </div>
          </div>

          <p className="card-text lead mb-0">{explicacion}</p>

          <div>
            <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">
              Ver recurso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

