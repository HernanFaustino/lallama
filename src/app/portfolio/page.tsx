type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'App de clima en React',
    description: 'Consulta el clima por ciudad usando la API de OpenWeather y React Hooks.',
    link: 'https://github.com/hernan/app-clima',
  },
  {
    title: 'Panel administrativo con Next.js',
    description: 'Dashboard con login, tablas dinámicas y consumo de datos desde API REST.',
    link: 'https://admin-demo.vercel.app',
  },
  {
    title: 'Blog personal con Markdown',
    description: 'Sitio estático que convierte archivos .md en páginas HTML, usando Next.js.',
    link: 'https://github.com/hernan/blog-md',
  },
];

export default function PortfolioPage() {
  return (
    <section className="container">
      <h2>Portafolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="four columns" key={index} style={{ marginBottom: '2rem' }}>
            <div
              style={{
                border: '1px solid #eee',
                padding: '1rem',
                borderRadius: '6px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              {project.link && (
                <a
                  className="button"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '1rem' }}
                >
                  Ver proyecto
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
