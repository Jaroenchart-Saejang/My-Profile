export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section-py container-px">
      {title && (
        <div className="mb-10">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
