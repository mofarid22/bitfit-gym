import { useState } from 'react'

export default function JoinForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim() && phone.trim().length >= 8) {
      setMsg(`شكرًا يا ${name.trim()}، هنكلمك على الواتساب لتحديد موعد حصتك.`)
      // هنا تقدر تبعت البيانات لـ API أو تفتح واتساب: window.open(`https://wa.me/20XXXXXXXXXX?text=...`)
    } else {
      setMsg('اكتب اسمك ورقم واتساب صحيح من 8 أرقام على الأقل.')
    }
  }

  return (
    <section id="join">
      <h2>احجز حصتك المجانية</h2>
      <p className="lead">اكتب بياناتك وهنكلمك على واتساب لتحديد الموعد.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="n">الاسم</label>
          <input id="n" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="p">رقم الواتساب</label>
          <input id="p" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button className="btn" type="submit">أرسل الطلب</button>
        <div className="msg" role="status">{msg}</div>
      </form>
    </section>
  )
}
