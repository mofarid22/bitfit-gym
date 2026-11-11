import { stats } from '../data'

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
