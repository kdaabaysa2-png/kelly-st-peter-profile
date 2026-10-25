import { useEffect, useState } from 'react'

const links = {
  facebook: 'https://www.facebook.com/cwb.salesagent1',
  messenger: 'https://m.me/cwb.salesagent1',
  application: 'https://tally.so/r/Y5AlPv',
  email: 'mailto:kdaabay.sa2@gmail.com?subject=St.%20Peter%20Life%20Plan%20consultation',
  official: 'https://online.stpeter.com.ph/Product/Index/LP',
  support: 'https://online.stpeter.com.ph/Home/ContactUs',
  pay: 'https://online.stpeter.com.ph/Paybill/Index',
  faq: 'https://online.stpeter.com.ph/Home/FAQ',
  fiveYear: 'https://online.stpeter.com.ph/PDF/TradPlans.pdf',
  sevenYear: 'https://online.stpeter.com.ph/PDF/TradPlans7years.pdf',
}

type Frequency = 'monthly' | 'quarterly' | 'semiAnnual' | 'annual'
type Schedule = { years: number, contract: number, monthly: number, quarterly: number, semiAnnual: number, annual: number, savings: Record<Frequency, number> & { spotCash: number } }
type Plan = { name: string, material: string, lid: string, image: string, schedules: Schedule[] }
const plans: Plan[] = [
  { name: 'St. George', material: 'Wood casket', lid: 'Single top · split lid · full glass', image: 'ST.%20GEORGE.png', schedules: [
    { years: 5, contract: 53000, annual: 10600, semiAnnual: 5620, quarterly: 2915, monthly: 1000, savings: { spotCash: 5300, annual: 1400, semiAnnual: 380, quarterly: 85, monthly: 0 } },
    { years: 7, contract: 57000, annual: 8145, semiAnnual: 4315, quarterly: 2240, monthly: 775, savings: { spotCash: 13800, annual: 1155, semiAnnual: 335, quarterly: 85, monthly: 0 } },
  ] },
  { name: 'St. Gregory', material: 'Metal casket', lid: 'Single top · split lid · full glass', image: 'ST.%20GREGORY.png', schedules: [
    { years: 5, contract: 57000, annual: 11400, semiAnnual: 6040, quarterly: 3135, monthly: 1100, savings: { spotCash: 5700, annual: 1800, semiAnnual: 560, quarterly: 165, monthly: 0 } },
    { years: 7, contract: 62000, annual: 8860, semiAnnual: 4695, quarterly: 2435, monthly: 850, savings: { spotCash: 15600, annual: 1340, semiAnnual: 405, quarterly: 115, monthly: 0 } },
  ] },
  { name: 'St. Claire', material: 'Metal casket', lid: 'Single top · half lid · half glass', image: 'ST.%20CLAIRE.png', schedules: [
    { years: 5, contract: 98500, annual: 19700, semiAnnual: 10440, quarterly: 5420, monthly: 1870, savings: { spotCash: 9850, annual: 2740, semiAnnual: 780, quarterly: 190, monthly: 0 } },
  ] },
  { name: 'St. Bernadette', material: 'Metal casket', lid: 'Single top · full lid · full glass', image: 'ST.%20BERNADETTE.png', schedules: [
    { years: 5, contract: 125000, annual: 25000, semiAnnual: 13250, quarterly: 6875, monthly: 2375, savings: { spotCash: 12500, annual: 3500, semiAnnual: 1000, quarterly: 250, monthly: 0 } },
  ] },
  { name: 'St. Anne', material: 'Metal casket', lid: 'Double top · split and full lids · full glass', image: 'ST.%20ANNE.png', schedules: [
    { years: 5, contract: 157500, annual: 31500, semiAnnual: 16695, quarterly: 8660, monthly: 3000, savings: { spotCash: 15750, annual: 4500, semiAnnual: 1305, quarterly: 340, monthly: 0 } },
  ] },
]
const frequencies: { key: Frequency, label: string, period: string }[] = [
  { key: 'monthly', label: 'Monthly', period: 'month' },
  { key: 'quarterly', label: 'Quarterly', period: 'quarter' },
  { key: 'semiAnnual', label: 'Semi-annual', period: 'six months' },
  { key: 'annual', label: 'Annual', period: 'year' },
]
const money = (amount: number) => '₱' + amount.toLocaleString('en-PH')
const photos: { src: string; alt: string; caption: string; term: string; protect?: boolean; redactions?: number[][] }[] = [
  { src: 'st-gregory-5-year.jpg', alt: 'Khessa and a client celebrating a St. Gregory plan at a café.', caption: 'St. Gregory', term: '5 years · monthly payments' },
  { src: 'st-gregory-7-year.jpg', alt: 'A client celebration featuring a St. Gregory plan. Personal details on the paperwork are obscured.', caption: 'St. Gregory', term: '7 years · monthly payments' },
  { src: 'st-george-7-year.jpg', alt: 'Khessa and a client holding a St. Peter brochure after choosing a St. George plan.', caption: 'St. George', term: '7 years · monthly payments' },
  { src: 'st-gregory-5-year-client.jpg', alt: 'Khessa and a client celebrating a St. Gregory plan. Document details are covered for privacy.', caption: 'St. Gregory', term: '5 years · monthly payments', protect: true },
  { src: 'st-gregory-client-with-dog.png', alt: 'Khessa with a St. Gregory client holding a dog. Document details are covered.', caption: 'St. Gregory', term: '5 years · monthly payments', redactions: [[510, 455, 245, 145]] },
  { src: 'st-gregory-family-plans.png', alt: 'Khessa with two clients celebrating their St. Gregory plans. Document details are covered.', caption: 'Two St. Gregory plans', term: '5 years · monthly payments', redactions: [[325, 355, 190, 95], [540, 378, 175, 95]] },
]
const faqs = [
  ['What is a St. Peter Traditional Life Plan?', 'It is a pre-need memorial plan for a specified memorial service package. You choose a plan and payment schedule in advance. Your Life Plan Agreement sets out the services and conditions.'],
  ['What is included in each plan?', 'The plans shown have different casket materials and lid designs. Review the official brochure and Life Plan Agreement for the service package, viewing arrangements, availability, and any additional coverage. Ask Khessa to explain the terms before you choose.'],
  ['What are the available payment terms?', 'The five plans shown offer five-year schedules. St. George and St. Gregory also offer seven-year schedules. Published payment frequencies are monthly, quarterly, semi-annual, and annual. The plan cards show the listed installment amounts for each option.'],
  ['How does the application process work?', 'Compare the plans, discuss your choice with Khessa, and review the official terms. Then follow the designated Tally application link. The external form asks for personal details and supporting documents. Ask Khessa for its privacy notice and confirm who receives your documents before submitting.'],
  ['Where should I make my payments?', 'Use St. Peter’s official payment channels and retain your official receipt. Confirm the payee and your plan details before paying. If an online facility is unavailable, contact St. Peter for another authorized channel. This profile does not accept payments.'],
  ['What happens if I miss a payment?', 'Contact Khessa or St. Peter promptly to check your account status and the terms that apply. Ask about due dates, any grace period, reinstatement requirements, and charges under your Life Plan Agreement. Do not assume your plan stays active.'],
  ['Are plans transferable or assignable?', 'St. Peter describes traditional plans as transferable and assignable, subject to its terms. A transfer to another living person and an assignment for a deceased person follow different conditions. Ask St. Peter to confirm any balance, fees, documents, and effect on coverage before proceeding.'],
  ['What happens if the planholder dies before completing payments?', 'Ask St. Peter to review the Life Plan Agreement and claim requirements for the specific account. Any insurance benefit or treatment of the unpaid balance depends on the contract, eligibility, exclusions, and claim approval. No automatic waiver is promised here.'],
  ['How do I contact Khessa for assistance?', 'Message Khessa Daabay through her Facebook page or Messenger. You also have the option to email kdaabay.sa2@gmail.com. For account verification, payments, or claims, use St. Peter’s official support channel.'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }
function External({ href, children, className = '' }: { href: string, children: React.ReactNode, className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (opens in a new tab)</span></a>
}
function Chat({ className = 'button outline', children = 'Chat with Khessa' }: { className?: string, children?: React.ReactNode }) {
  return <External href={links.messenger} className={className}>{children} <Arrow /></External>
}
function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="header-inner">
    <a href="/" className="wordmark" aria-label="Khessa Daabay home"><span className="st-peter-logo-frame"><img src="/images/brand/st-peter-transparent.png" alt="St. Peter — DeathCare Experts" width="554" height="554" /></span><span>Khessa Daabay<small>St. Peter · Unit Manager</small></span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '+'}</span></button>
    <nav id="main-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation" onClick={() => setOpen(false)}>
      <a href="/#st-peter">Life plans</a><a href="/#about">Meet Khessa</a><a href="/#stories">Client stories</a><a href="/team">Careers &amp; Team</a><a href="/#faqs">FAQs</a><Chat className="button small outline" />
    </nav>
  </div></header>
}
function Footer() {
  return <footer className="site-footer"><div className="wrap footer-top"><a href="/" className="footer-name">Khessa Daabay<span>St. Peter · Unit Manager</span></a><div className="footer-links"><External href={links.facebook}>Facebook <Arrow /></External><a href={links.email}>Email <Arrow /></a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div>
    <div className="wrap footer-bottom"><p>© {new Date().getFullYear()} Khessa Daabay. Personal professional profile.</p><p><a href="/team">Careers &amp; Team</a> · This profile is independently maintained. For corporate information, visit <External href="https://www.stpeter.com.ph/">St. Peter’s official website</External>.</p></div>
  </footer>
}
function PlanComparison() {
  const [years, setYears] = useState(5)
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const chosen = frequencies.find(f => f.key === frequency)!
  const visible = plans.filter(p => p.schedules.some(s => s.years === years))
  return <section id="st-peter" className="section plans-section" aria-labelledby="plans-title"><div className="wrap">
    <div className="section-head"><div><p className="eyebrow">Plan ahead, at your pace</p><h2 id="plans-title">Find a plan that fits your family.</h2></div><p>Start with the details that matter to you. Compare the casket, payment period, and installment schedule at your own pace.</p></div>
    <div className="comparison-controls"><fieldset><legend>Payment period</legend><div className="segmented">{[5, 7].map(n => <button key={n} type="button" aria-pressed={years === n} onClick={() => setYears(n)}>{n} years to pay</button>)}</div></fieldset>
      <div className="frequency-control"><label htmlFor="frequency">Payment frequency</label><select id="frequency" value={frequency} onChange={e => setFrequency(e.target.value as Frequency)}>{frequencies.map(f => <option value={f.key} key={f.key}>{f.label}</option>)}</select></div>
    </div>
    <p className="selection-summary" aria-live="polite">{visible.length} plans · {years}-year payment period · {chosen.label.toLowerCase()} installments{years === 7 ? ' · Available for St. George and St. Gregory.' : ''}</p>
    <div className="plan-grid">{visible.map(plan => {
      const schedule = plan.schedules.find(s => s.years === years)!
      return <article key={plan.name} className="plan-card"><div className="plan-card-heading"><p className="eyebrow">{years}-years to pay plan</p><h3>{plan.name}</h3></div><div className="plan-image"><img src={`/images/plans/${plan.name.toLowerCase().replace('. ', '-')}.webp`} width="640" height="360" loading="lazy" decoding="async" alt={`${plan.name} ${plan.material.toLowerCase()}, ${plan.lid.toLowerCase()}`} onError={e => { e.currentTarget.hidden = true; e.currentTarget.parentElement?.classList.add('image-unavailable') }} /><span className="image-fallback">See the official brochure for the product image.</span></div>
        <div className="plan-content"><p className="plan-detail">{plan.material} · {plan.lid}</p><div className="price"><strong>{money(schedule[frequency])}</strong><span> / {chosen.period}</span><small>{years} years to pay</small></div>
        <p className="contract-price">Contract price <strong>{money(schedule.contract)}</strong></p>
        <details className="schedule-details"><summary>View all payment frequencies <span aria-hidden="true">+</span></summary><dl>{frequencies.map(f => <div key={f.key}><dt>{f.label}</dt><dd><span>{money(schedule[f.key])}</span><small className="payment-saving">Save {money(schedule.savings[f.key])}</small></dd></div>)}<div className="spot-saving"><dt>Spot cash savings</dt><dd><small className="payment-saving">Save {money(schedule.savings.spotCash)}</small></dd></div></dl><p className="fineprint savings-source">Savings are listed as shown in <External href={links.application}>Khessa’s application form</External>. Confirm the applicable quote and savings basis before applying.</p><p className="fineprint">The contract price and total installments differ by payment frequency. Review your selected schedule before applying.</p></details>
        <External href={links.application} className="button primary plan-ask">Buy this plan <Arrow /></External>
      </div></article>
    })}</div>
    <div className="source-note"><span className="note-icon" aria-hidden="true">i</span><div><p>Clear rates. Informed choices.</p><p>Rates checked against St. Peter’s official materials on 24 October 2026. Prices, benefits, eligibility, and availability are subject to current official terms. Confirm your quote and Life Plan Agreement before applying.</p><div className="text-links"><External href={links.fiveYear}>5-year brochure <Arrow /></External><External href={links.sevenYear}>7-year brochure <Arrow /></External><External href={links.official}>Official plan listings <Arrow /></External></div></div></div>

  </div></section>
}
function PlanBenefits() {
  const benefits = [
    ['Cash benefit', '100% of the contract price for qualifying death during the paying period or within five years after full payment, before age 65.'],
    ['Unpaid balance deemed paid', 'Remaining installments are considered paid on a qualifying death during the paying period, before age 65.'],
    ['Waiver of installment', 'Installment waiver for qualifying disability lasting at least six months during the paying period, before age 60.'],
    ['Accidental death & dismemberment', 'A benefit equal to the contract price for qualifying accidental death or specified losses during the paying period, before age 60.'],
  ]
  return <section className="plan-benefits section" aria-labelledby="benefits-title"><div className="wrap">
    <div className="included-panel"><p className="eyebrow">What’s included</p><h2>Support for the arrangements that matter.</h2><ul>{['Retrieval', 'Embalming', 'Viewing room or house viewing', 'Viewing equipment, casket, lights and related equipment', 'Transport to the interment site', 'Four-day viewing period'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul><p><strong>Memorial lots and columbarium are not included.</strong> Service arrangements depend on the selected plan and provider terms. Chapel viewing is subject to room availability.</p></div>
    <div className="benefits-heading"><h2 id="benefits-title">Plan features &amp; value-added benefits</h2><p>Transferability, assignability, and unrendered-service provisions apply under the plan terms. Ask Khessa how these apply to your selected plan.</p></div>
    <div className="benefits-grid">{benefits.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <p className="benefits-terms">Insurance benefits require an insurable planholder, eligibility, and claim approval. St. Peter lists purchase ages 18–60 for cash, balance and waiver benefits, and 18–55 for accidental benefits. Confirm the applicable 5- or 7-year contract terms with Khessa. <External href="https://online.stpeter.com.ph/Home/Invest">Official benefits and conditions</External></p>
  </div></section>
}
function ClientStories() {
  const [paused, setPaused] = useState(false)
  return <section id="stories" className="section stories-section" aria-labelledby="stories-title"><div className="wrap"><div className="section-head"><div><p className="eyebrow">03 / Client stories</p><h2 id="stories-title">Families who chose<br /><em>to plan ahead.</em></h2></div><div><p>A few moments shared with clients as they chose their St. Peter plans. Each family has its own priorities and reasons for planning.</p><button className="text-button motion-control" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Resume photo motion' : 'Pause photo motion'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button></div></div></div>
    <div className={`photo-marquee${paused ? ' is-paused' : ''}`} aria-label="Client plan gallery">{[photos, [...photos].reverse()].map((row, i) => <div key={i} className={`photo-row photo-row-${i + 1}`} tabIndex={0} role="group" aria-label={`Client photos, row ${i + 1}`}><div className="photo-track">{[false, true].map(duplicate => <div className="photo-set" aria-hidden={duplicate ? true : undefined} key={String(duplicate)}>{row.map((photo, j) => <figure className={`story-card ${j % 2 ? 'square' : 'wide'}`} key={photo.src}><div className="story-image"><img src={`/images/client-stories/${photo.src}`} alt={duplicate ? '' : photo.alt} width="1200" height="1200" loading="lazy" decoding="async" />{photo.redactions && <svg className="story-redactions" viewBox="0 0 1254 1254" aria-hidden="true">{photo.redactions.map(([x, y, width, height], index) => <rect key={index} x={x} y={y} width={width} height={height} rx="6" />)}</svg>}{photo.protect && <span className="document-cover" aria-hidden="true">Private details</span>}</div><figcaption><strong>{photo.caption}</strong><span>{photo.term}</span></figcaption></figure>)}</div>)}</div></div>)}</div>
  </section>
}
function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title"><div className="wrap hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="gold-line" /> St. Peter Traditional Life Plans</p><h1 id="hero-title">Plan ahead<br />with <em>confidence.</em></h1><p className="hero-description">Thoughtful choices for the people you love. Explore St. Peter life plans with personal guidance from Khessa, your Unit Manager.</p><div className="hero-actions"><a className="button primary" href="#st-peter">Explore life plans <span aria-hidden="true">↓</span></a><Chat className="button outline" /></div><div className="hero-person"><span className="tiny-rule" aria-hidden="true" /><p><strong>Khessa Daabay</strong><span>St. Peter · Unit Manager</span></p></div></div>
      <div className="hero-portrait"><img src="/images/profile/khessa-800.webp" srcSet="/images/profile/khessa-480.webp 480w, /images/profile/khessa-800.webp 800w, /images/profile/khessa-1086.webp 1086w" sizes="(max-width: 700px) 95vw, 45vw" alt="Khessa Daabay, St. Peter Unit Manager, in a black blazer." width="1086" height="1448" fetchPriority="high" /><div className="portrait-caption"><span className="caption-icon" aria-hidden="true">✳</span><p>Personal guidance.<br /><strong>At your own pace.</strong></p></div><span className="portrait-label">Here to help you plan.</span></div>
    </div><div className="wrap hero-foot"><p>Personal profile · Cagayan de Oro City</p><External href={links.official}>Explore St. Peter’s official information <Arrow /></External></div></section>
    <div className="intro-strip"><div className="wrap intro-grid"><div><span>01</span><p>Understand your options<small>Compare the details clearly.</small></p></div><div><span>02</span><p>Find your payment schedule<small>Choose a period and frequency.</small></p></div><div><span>03</span><p>Speak with Khessa<small>Get answers before you apply.</small></p></div></div></div>
    <PlanComparison /><PlanBenefits />
    <section id="about" className="section about-section" aria-labelledby="about-title"><div className="wrap about-grid"><div className="about-photo"><img src="/images/profile/khessa-480.webp" srcSet="/images/profile/khessa-480.webp 480w, /images/profile/khessa-800.webp 800w" sizes="(max-width: 700px) 340px, 35vw" alt="Khessa Daabay, your St. Peter life plan contact." width="1086" height="1448" loading="lazy" /><span>Khessa Daabay <small>St. Peter · Unit Manager</small></span></div><div className="about-copy"><p className="eyebrow">02 / Meet Khessa</p><h2 id="about-title">Meet your St. Peter<br /><em>Life Plan Consultant.</em></h2><p className="large-copy">Hi, I’m Khessa Daabay.</p><p className="service-location">Based in Cagayan de Oro City, Philippines</p><p>I’m a St. Peter Unit Manager. I’ll help you compare the available traditional life plans, understand the payment schedules, and prepare for the application process.</p><p>Choosing a plan is a personal decision. Let’s go through your questions and the official terms together, so you understand your options before you proceed.</p><dl className="identity-details"><div><dt>Sales agent code</dt><dd>CAGAYA23SA100098</dd></div><div><dt>Referral code</dt><dd>KHES6283</dd></div></dl><p className="fineprint">These are the agent and referral codes supplied for this profile. For confirmation of agent status or account details, contact St. Peter directly.</p><div className="text-links"><External href={links.facebook}>Visit Khessa’s Facebook page <Arrow /></External><External href={links.support}>Official St. Peter support <Arrow /></External></div></div></div></section>
    <ClientStories />
    <section id="how-it-works" className="section process-section" aria-labelledby="process-title"><div className="wrap"><div className="section-head"><div><p className="eyebrow">04 / How it works</p><h2 id="process-title">One thoughtful step<br /><em>at a time.</em></h2></div><p>Start with a conversation. Take the time you need to understand the plan and make a choice that suits your family.</p></div><ol className="steps"><li><span className="step-number">01</span><h3>Explore your options</h3><p>Compare the available plans, casket details, and payment schedules.</p><a href="#st-peter">Browse life plans <span aria-hidden="true">↗</span></a></li><li><span className="step-number">02</span><h3>Talk to Khessa</h3><p>Ask your questions and discuss which option fits your needs and budget.</p><External href={links.messenger}>Start a conversation <Arrow /></External></li><li><span className="step-number">03</span><h3>Complete your application</h3><p>Review the official terms, then follow the designated application channel.</p><a href="#application">See application steps <span aria-hidden="true">↗</span></a></li></ol></div></section>
    <section id="application" className="section application-section" aria-labelledby="application-title"><div className="wrap application-grid"><div><p className="eyebrow">When you’re ready</p><h2 id="application-title">Your next step,<br /><em>with guidance.</em></h2><p>Speak with Khessa first to confirm your plan, payment schedule, and the official terms. When you’re ready, continue to her designated application form.</p><External href={links.application} className="button primary">Start application <Arrow /></External><p className="referral">Referral code <strong>KHES6283</strong></p></div><div className="application-note"><h3>Before you open the form</h3><ul><li>The Tally form collects personal details and supporting uploads, including identification, signatures, and a payment receipt.</li><li>Ask Khessa for the privacy notice, the intended recipient, and retention details before uploading documents.</li><li>The external form shows payment QR codes. Confirm payee authorization with St. Peter before using them. Keep your official receipt.</li></ul><p>This profile has no document upload or payment form.</p><External href={links.pay}>St. Peter’s official payment channel <Arrow /></External></div></div></section>
    <section className="careers-promo" aria-labelledby="careers-title"><div className="wrap careers-promo-inner"><div><p className="eyebrow">Careers &amp; Team</p><h2 id="careers-title">Do you want to be part of our team?</h2><p>Build your career with a supportive team. Learn, grow, and help Filipino families prepare for the future.</p></div><a className="button primary" href="/team">Explore career opportunities <Arrow /></a></div></section>
    <section id="faqs" className="section faq-section" aria-labelledby="faq-title"><div className="wrap faq-grid"><div className="faq-intro"><p className="eyebrow">05 / Helpful answers</p><h2 id="faq-title">Clarity before<br /><em>commitment.</em></h2><p>Start here, then ask Khessa about the details that apply to you.</p><External href={links.faq} className="text-link">Official St. Peter FAQs <Arrow /></External></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary><span className="faq-number">{String(i + 1).padStart(2, '0')}</span><span>{question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="wrap contact-grid"><div><p className="eyebrow">Let’s plan together</p><h2 id="contact-title">A conversation today.<br /><em>A more informed tomorrow.</em></h2><p>Tell Khessa what you’re looking for. Get help comparing plans and understanding the next steps.</p><Chat className="button outline">Chat with Khessa</Chat></div><div className="contact-direct"><span className="contact-label">Your personal contact</span><h3>Khessa Daabay</h3><p>St. Peter · Unit Manager</p><a href={links.email}>kdaabay.sa2@gmail.com <Arrow /></a><External href={links.facebook}>St. Peter Life Plan with Khessa <Arrow /></External><span className="contact-small">For official account, payment, or claim assistance, <External href={links.support}>contact St. Peter</External>.</span></div></div></section>
  </>
}
const legalContent = {
  privacy: { title: 'Privacy notice', intro: 'Your information deserves careful handling.', sections: [
    ['This profile', 'This website introduces Khessa Daabay and St. Peter Traditional Life Plans. It has no account registration, inquiry submission, document upload, or payment collection form. It does not add advertising trackers or analytics.'],
    ['Hosting and technical information', 'Vercel hosts this website. The hosting provider processes technical request information such as IP address, browser details, and access logs to deliver and protect the service. See Vercel’s privacy policy for its handling of this information.'],
    ['External conversations and applications', 'Facebook, Messenger, email, Tally, and St. Peter pages operate separately. Opening them takes you to the relevant provider. Information you send is handled by the recipient and provider under their own policies. The application form requests personal information and supporting documents. Confirm its purpose, recipient, retention, and privacy details before submitting.'],
    ['Photos and personal information', 'The gallery uses client photographs supplied for this profile. Document details are covered where shown. To request a correction or removal, email kdaabay.sa2@gmail.com and identify the relevant photograph or information.'],
    ['Your requests', 'For questions about information shared with Khessa, email kdaabay.sa2@gmail.com. For a St. Peter account, contact St. Peter directly. You have the option to request access, correction, or removal of your personal information, subject to the applicable requirements.'],
  ] },
  terms: { title: 'Website terms', intro: 'Use this profile to explore your options and prepare your questions.', sections: [
    ['Personal professional profile', 'This is Khessa Daabay’s personal professional profile. It is independently maintained and is not St. Peter’s official corporate website. St. Peter names, product images, and brand assets identify the relevant products and company. No separate corporate endorsement is implied.'],
    ['Plan information', 'Published rates are references checked against official St. Peter materials on 24 October 2026. Prices, availability, benefits, eligibility, and conditions are subject to current official terms and your issued Life Plan Agreement. Confirm a current quote before applying. Nothing on this website guarantees eligibility, insurance benefits, claim approval, or a waiver of payments.'],
    ['Applications and payments', 'Applications use the designated external form. This profile does not accept payments, issue contracts, or approve applications or claims. Use authorized St. Peter payment channels and keep your official receipts.'],
    ['External services', 'Linked providers operate their own websites and services. Review their privacy policies and terms. If a link or payment facility is unavailable, contact Khessa or official St. Peter support for assistance.'],
    ['Questions and corrections', 'Email kdaabay.sa2@gmail.com for questions, corrections, or concerns about this profile. Contact St. Peter directly for authoritative confirmation of product terms, agent status, account information, or claims.'],
  ] },
}
function Legal({ page }: { page: 'privacy' | 'terms' }) {
  const content = legalContent[page]
  return <section className="legal-page wrap"><p className="eyebrow">Khessa Daabay / St. Peter Unit Manager</p><h1>{content.title}</h1><p className="large-copy">{content.intro}</p><p className="fineprint">Last updated: 24 October 2026</p>{content.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<div className="text-links"><a href={links.email}>Contact Khessa <Arrow /></a><External href="https://vercel.com/legal/privacy-policy">Vercel privacy policy <Arrow /></External><External href={links.support}>Official St. Peter support <Arrow /></External></div><a className="button outline" href="/">Back to home <span aria-hidden="true">←</span></a></section>
}
export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  useEffect(() => {
    if (path === '/privacy' || path === '/terms') {
      document.title = `${path === '/privacy' ? 'Privacy notice' : 'Website terms'} | Khessa Daabay`
      document.querySelector('link[rel=canonical]')?.setAttribute('href', `https://st-peter-by-khessa.vercel.app${path}`)
    } else if (path !== '/' && !['/about','/contact','/st-peter-plans'].includes(path)) {
      document.title = 'Page not found | Khessa Daabay'
      const noindex = document.createElement('meta'); noindex.name = 'robots'; noindex.content = 'noindex'; document.head.appendChild(noindex)
    }
  }, [path])
  const legal = path === '/privacy' || path === '/terms'
  const home = path === '/' || ['/about', '/contact', '/st-peter-plans'].includes(path)
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{legal ? <Legal page={path.slice(1) as 'privacy' | 'terms'} /> : home ? <Home /> : <section className="legal-page wrap"><p className="eyebrow">404 / Page not found</p><h1>Let’s get you<br />back to the plans.</h1><p>This page is no longer part of Khessa’s professional profile.</p><a className="button primary" href="/#st-peter">Explore life plans <Arrow /></a></section>}</main><Footer /></>
}
