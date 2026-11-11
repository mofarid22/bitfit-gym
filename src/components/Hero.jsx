export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>
          ابنِ جسمك <span>على أصول</span>
        </h1>
        <p>
          أجهزة حديثة، أوزان حرة كاملة، ومدربون يتابعون تمرينك بنفسهم. ابدأ بحصة تجريبية مجانية وشوف الفرق.
        </p>
        <div className="cta">
          <a className="btn" href="#join">احجز حصة مجانية</a>
          <a className="btn ghost" href="#plans">شوف الأسعار</a>
        </div>
      </div>
      <Barbell />
    </div>
  )
}

function Barbell() {
  return (
    <div className="bar" aria-hidden="true">
      <div className="rod" />
      <div className="pl" style={{ right: '3%', height: '44%' }} />
      <div className="pl" style={{ right: '11%', height: '62%' }} />
      <div className="pl" style={{ left: '3%', height: '44%' }} />
      <div className="pl" style={{ left: '11%', height: '62%' }} />
      <div className="big">B</div>
    </div>
  )
}
