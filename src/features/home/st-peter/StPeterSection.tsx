import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react'
import './st-peter.css'

const applicationUrl = 'https://tally.so/r/Y5AlPv'
const planImageBase = 'https://online.stpeter.com.ph/Images/Plan'

const plans = [
  {
    name: 'St. George',
    detail: 'Wood casket · single top · split lid',
    image: 'ST.%20GEORGE.png',
    imageAlt: 'St. George traditional life plan casket',
    schedules: [
      { term: '5 years to pay', contract: '₱53,000', annual: '₱10,600', semiAnnual: '₱5,620', quarterly: '₱2,915', monthly: '₱1,000' },
      { term: '7 years to pay', contract: '₱57,000', annual: '₱8,145', semiAnnual: '₱4,315', quarterly: '₱2,240', monthly: '₱775' },
    ],
  },
  {
    name: 'St. Gregory',
    detail: 'Metal casket · single top · split lid',
    image: 'ST.%20GREGORY.png',
    imageAlt: 'St. Gregory traditional life plan casket',
    schedules: [
      { term: '5 years to pay', contract: '₱57,000', annual: '₱11,400', semiAnnual: '₱6,040', quarterly: '₱3,135', monthly: '₱1,100' },
      { term: '7 years to pay', contract: '₱62,000', annual: '₱8,860', semiAnnual: '₱4,695', quarterly: '₱2,435', monthly: '₱850' },
    ],
  },
  {
    name: 'St. Claire',
    detail: 'Metal casket · single top · full lid',
    image: 'ST.%20CLAIRE.png',
    imageAlt: 'St. Claire traditional life plan casket',
    schedules: [
      { term: '5 years to pay', contract: '₱98,500', annual: '₱19,700', semiAnnual: '₱10,440', quarterly: '₱5,420', monthly: '₱1,870' },
    ],
  },
  {
    name: 'St. Bernadette',
    detail: 'Metal casket · single top · full lid',
    image: 'ST.%20BERNADETTE.png',
    imageAlt: 'St. Bernadette traditional life plan casket',
    schedules: [
      { term: '5 years to pay', contract: '₱125,000', annual: '₱25,000', semiAnnual: '₱13,250', quarterly: '₱6,875', monthly: '₱2,375' },
    ],
  },
  {
    name: 'St. Anne',
    detail: 'Metal casket · double top · split and full lids',
    image: 'ST.%20ANNE.png',
    imageAlt: 'St. Anne traditional life plan casket',
    schedules: [
      { term: '5 years to pay', contract: '₱157,500', annual: '₱31,500', semiAnnual: '₱16,695', quarterly: '₱8,660', monthly: '₱3,000' },
    ],
  },
]

const frequencies = [
  { label: 'Annual', key: 'annual' },
  { label: 'Semi-annual', key: 'semiAnnual' },
  { label: 'Quarterly', key: 'quarterly' },
  { label: 'Monthly', key: 'monthly' },
]

export function StPeterSection() {
  return (
    <section id="st-peter" className="sp" aria-labelledby="sp-title">
      <header className="sp__head">
        <p className="sp__eyebrow"><span>St. Peter Life Plans</span><i aria-hidden /></p>
        <h2 id="sp-title">Plan ahead.<br /><strong>I’ll help you compare.</strong></h2>
        <p className="sp__intro">
          Compare casket photos, payment periods, and installment frequencies. I’ll guide you
          through the options and application steps.
        </p>
      </header>

      <div className="sp__layout">
        <div className="sp__plans" aria-label="St. Peter plan photos and installment schedules">
          {plans.map((plan, index) => (
            <article className="sp__plan" key={plan.name}>
              <div className="sp__photo-wrap">
                <img
                  className="sp__photo"
                  src={planImageBase + '/' + plan.image}
                  alt={plan.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="sp__plan-heading">
                <span className="sp__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.detail}</p>
                </div>
              </div>
              <div className="sp__schedules">
                {plan.schedules.map((schedule) => (
                  <section className="sp__schedule" key={schedule.term} aria-label={plan.name + ', ' + schedule.term}>
                    <div className="sp__schedule-head">
                      <h4>{schedule.term}</h4>
                      <p>Contract price <strong>{schedule.contract}</strong></p>
                    </div>
                    <dl className="sp__frequency-grid">
                      {frequencies.map((frequency) => (
                        <div key={frequency.key}>
                          <dt>{frequency.label}</dt>
                          <dd>{schedule[frequency.key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            </article>
          ))}
          <p className="sp__fineprint">
            Installment amounts follow St. Peter’s published brochures. Prices and eligibility may
            change. Confirm the current quote, payment schedule, availability, and contract terms
            with St. Peter before applying.
            {' '}<a href="https://online.stpeter.com.ph/Product/Index/LP" target="_blank" rel="noopener noreferrer">View official plan listings</a>
          </p>
        </div>

        <aside className="sp__apply" aria-label="Apply with Khessa Daabay">
          <div className="sp__apply-mark" aria-hidden><CheckCircle size={20} weight="fill" /></div>
          <p className="sp__label">Your St. Peter contact</p>
          <h3>Khessa Daabay</h3>
          <p className="sp__role">St. Peter · Unit Manager</p>
          <dl className="sp__codes">
            <div><dt>Sales agent code</dt><dd>CAGAYA23SA100098</dd></div>
            <div><dt>Referral code</dt><dd>KHES6283</dd></div>
          </dl>
          <p className="sp__apply-copy">Use referral code KHES6283 in the application form.</p>
          <a className="sp__cta" href={applicationUrl} target="_blank" rel="noopener noreferrer">
            Start application <ArrowUpRight size={17} weight="bold" aria-hidden />
          </a>
          <p className="sp__privacy">
            The Tally form requests personal information and supporting uploads, including ID,
            signature specimens, and a payment receipt. Review the form before submitting.
          </p>
        </aside>
      </div>
    </section>
  )
}
