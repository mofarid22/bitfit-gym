import { plans } from '../data'

export default function Plans() {
  return (
    <section id="plans">
      <h2>الاشتراكات</h2>
      <p className="lead">أسعار واضحة بدون رسوم خفية، وأول حصة عليك مجانًا.</p>
      <div className="grid3">
        {plans.map((p) => (
          <div className={p.best ? 'plan best' : 'plan'} key={p.name}>
            <h3>{p.name}</h3>
            <div className="price">
              {p.price} <small>ج.م</small>
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a className={p.best ? 'btn' : 'btn ghost'} href="#join">اشترك</a>
          </div>
        ))}
      </div>
    </section>
  )
}
