export default function SectionTitle({ eyebrow, title, description, align }) {
  return (
    <div className="section-head" style={align === 'center' ? { justifyContent: 'center', textAlign: 'center' } : undefined}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
