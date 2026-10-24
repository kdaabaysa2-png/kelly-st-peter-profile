import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react'
import './st-peter.css'

const applicationUrl = 'https://tally.so/r/Y5AlPv'

const plans = [
  { name: 'St. George', detail: 'Wood · single top, split lid', terms: '5 or 7 years to pay' },
  { name: 'St. Gregory', detail: 'Metal · single top, split lid', terms: '5 or 7 years to pay' },
  { name: 'St. Claire', detail: 'Metal · single top, full lid', terms: '5 years to pay' },
  { name: 'St. Bernadette', detail: 'Wood · single top, full lid', terms: '5 years to pay' },
  { name: 'St. Anne', detail: 'Metal · double top, split and full lids', terms: '5 years to pay' },
]

export function StPeterSection() {
  return (
    <section id="st-peter" className="sp" aria-labelledby="sp-title">
      <header className="sp__head">
        <p className="sp__eyebrow"><span>St. Peter Life Plans</span><i aria-hidden /></p>
        <h2 id="sp-title">Plan ahead.<br /><strong>I’ll help you compare.</strong></h2>
        <p className="sp__intro">
          Explore the plan choices in the application form. I’ll guide you through the options,
          payment modes, and application steps.
        </p>
      </header>

      <div className="sp__layout">
        <div className="sp__plans" aria-label="Plan choices shown in the application form">
          {plans.map((plan, index) => (
            <article className="sp__plan" key={plan.name}>
              <span className="sp__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="sp__plan-copy">
                <h3>{plan.name}</h3>
                <p>{plan.detail}</p>
              </div>
              <span className="sp__term">{plan.terms}</span>
            </article>
          ))}
          <p className="sp__fineprint">
            Choices and payment modes depend on the selected plan. Confirm current pricing,
            availability, inclusions, and contract terms with St. Peter before applying.
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
