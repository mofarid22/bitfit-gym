import { programs } from '../data'

export default function Programs() {
  return (
    <section id="programs">
      <h2>برامج التمرين</h2>
      <p className="lead">اختر البرنامج حسب هدفك، والمدرب يظبطه معك حسب مستواك.</p>
      <div className="grid3">
        {programs.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <span className="tag">{p.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
