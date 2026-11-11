import { useState } from 'react'

function getInfo(bmi) {
  if (bmi < 18.5) return ['نحافة', 'ابدأ ببرنامج بناء العضلات مع زيادة السعرات.']
  if (bmi < 25) return ['وزن طبيعي', 'ممكن تختار بناء العضلات أو اللياقة العامة حسب هدفك.']
  if (bmi < 30) return ['وزن زائد', 'برنامج خسارة الوزن هو أنسب بداية.']
  return ['سمنة', 'ابدأ بخسارة الوزن مع مدرب يتابعك، ويفضل استشارة طبيب.']
}

export default function BmiCalculator() {
  const [height, setHeight] = useState('175')
  const [weight, setWeight] = useState('80')

  const h = parseFloat(height)
  const w = parseFloat(weight)
  const valid = h >= 100 && h <= 230 && w >= 30 && w <= 250

  let result = <p>اكتب طولًا بين 100 و230 سم ووزنًا بين 30 و250 كجم.</p>
  if (valid) {
    const bmi = w / Math.pow(h / 100, 2)
    const [title, advice] = getInfo(bmi)
    result = (
      <>
        <b>{bmi.toFixed(1)}</b>
        <strong>{title}</strong>
        <p>{advice}</p>
      </>
    )
  }

  return (
    <section id="bmi">
      <h2>احسب مؤشر كتلة جسمك</h2>
      <p className="lead">اكتب طولك ووزنك وهنقترح عليك البرنامج الأنسب للبداية.</p>
      <div className="bmi">
        <div className="row">
          <div>
            <label htmlFor="h">الطول (سم)</label>
            <input id="h" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label htmlFor="w">الوزن (كجم)</label>
            <input id="w" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
        </div>
        <div className="res" aria-live="polite">{result}</div>
      </div>
    </section>
  )
}
