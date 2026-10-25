import { agents, publicAgents } from './agents'
import './team.css'

type TeamRoute = 'home' | 'agents' | 'profile' | 'join'

const messenger = 'https://m.me/cwb.salesagent1'
const email = 'kdaabay.sa2@gmail.com'

function TeamHeader() {
  return <header className="team-header"><a className="team-brand" href="/team" aria-label="Khessa Daabay Team and Careers home"><img className="team-brand-mark" src="/images/brand/st-peter-mark.svg" width="42" height="42" alt="St. Peter emblem" /><span>Khessa Daabay<small>Team &amp; Careers</small></span></a><nav aria-label="Team navigation"><a href="/team">Our team</a><a href="/team/agents">Agents</a><a href="/team/join">Careers</a><a className="team-nav-back" href="/">Life plans <span aria-hidden="true">↗</span></a></nav></header>
}

function TeamFooter() {
  return <footer className="team-footer"><div><a href="/team">Khessa Daabay · Team &amp; Careers</a><p>An independently maintained team and recruitment microsite. This is not St. Peter’s corporate website.</p></div><div className="team-footer-links"><a href="/team/agents">Meet the team</a><a href="/team/join">Join our team</a><a href="/privacy">Privacy</a><a href="/">Life plans</a></div><p className="team-payment-note">First payments are made directly to the CDO Head Office. Succeeding payments are made through official payment channels after contract generation.</p></footer>
}

function AgentCard({ profile = publicAgents[0], showViewProfile = true }: { profile?: (typeof publicAgents)[number], showViewProfile?: boolean }) {
  if (!profile) return null
  return <article className="agent-card"><div className="agent-photo"><img src={profile.profileImage} width="800" height="1067" loading="lazy" alt={`Portrait of ${profile.fullName}`} /></div><div className="agent-info"><p className="team-eyebrow">Team leader</p><h2>{profile.fullName}</h2><p className="agent-role">{profile.role}</p><p className="agent-location">{profile.location}</p><p>{profile.bio}</p><div className="agent-badges">{profile.isVerified && <span className="verified-badge">St. Peter status confirmed</span>}<span>Contact details supplied for this profile</span></div><div className="team-actions">{showViewProfile && <a className="team-button green" href={`/team/agents/${profile.slug}`}>View profile <span aria-hidden="true">↗</span></a>}<a className="team-button glass" href={profile.messengerUrl} target="_blank" rel="noopener noreferrer">Message Khessa <span aria-hidden="true">↗</span></a></div></div></article>
}

function TeamHome() {
  return <>
    <section className="team-hero"><div className="team-hero-copy"><p className="team-eyebrow">Khessa Daabay <span>Team &amp; Careers</span></p><h1>Grow your career.<br /><em>Make a difference.</em></h1><p>Be part of a team dedicated to helping Filipino families prepare for life’s important moments. Explore ways to learn, serve, and grow professionally.</p><div className="team-actions"><a className="team-button green" href="/team/join">Join our team <span aria-hidden="true">↗</span></a><a className="team-button glass" href="/team/agents">Meet our team <span aria-hidden="true">↓</span></a></div><div className="team-hero-note"><span aria-hidden="true">✳</span><p>Guidance, learning, and meaningful client service.<small>Details about role terms are confirmed during the team discussion.</small></p></div></div><div className="team-hero-photo"><img src="/images/profile/khessa-800.webp" srcSet="/images/profile/khessa-480.webp 480w, /images/profile/khessa-800.webp 800w, /images/profile/khessa-1086.webp 1086w" sizes="(max-width: 760px) 90vw, 44vw" width="800" height="1067" fetchPriority="high" alt="Khessa Daabay, St. Peter Unit Manager." /><span>Khessa Daabay <small>Unit Manager</small></span></div></section>
    <section className="team-section team-lead-section"><div className="team-section-heading"><p className="team-eyebrow">Meet your contact</p><h2>Start with a real person.</h2><p>Connect with Khessa to learn about the team, role expectations, and current onboarding requirements.</p></div><AgentCard /></section>
    <section className="team-paths"><article><span className="team-path-number">01</span><p className="team-eyebrow">For applicants</p><h2>Explore a career with Khessa’s team.</h2><p>Learn about the role, mentorship, training, and official requirements before deciding whether to proceed.</p><a href="/team/join">Explore career opportunities <span aria-hidden="true">↗</span></a></article><article><span className="team-path-number">02</span><p className="team-eyebrow">For clients</p><h2>Find a team contact.</h2><p>View Khessa’s profile and use her published contact channels. Confirm agent status with St. Peter when needed.</p><a href="/team/agents">Meet the team <span aria-hidden="true">↗</span></a></article></section>
    <section className="team-callout"><p className="team-eyebrow">Your next step</p><h2>Questions about joining?</h2><p>Start a direct conversation with Khessa. No application data is collected on this website.</p><div className="team-actions"><a className="team-button green" href={messenger} target="_blank" rel="noreferrer">Ask Khessa on Messenger <span aria-hidden="true">↗</span></a><a className="team-button glass" href={`mailto:${email}?subject=Team%20and%20career%20opportunity`}>Email Khessa</a></div></section>
  </>
}

function AgentsDirectory() {
  return <section className="team-subpage"><p className="team-eyebrow">Khessa Daabay · Team contacts</p><h1>Meet our <em>team.</em></h1><p className="team-lede">Connect with Khessa’s team about St. Peter Traditional Life Plans. Khessa is the only public team profile at this time.</p><AgentCard /><div className="team-trust-note"><strong>Need to confirm agent status?</strong><p>No St. Peter verification badge is shown until the status is confirmed. Contact St. Peter directly for official confirmation.</p><a href="https://online.stpeter.com.ph/Home/ContactUs" target="_blank" rel="noreferrer">Contact official St. Peter support <span aria-hidden="true">↗</span></a></div></section>
}

function AgentProfile() {
  const profile = agents.find(agent => agent.slug === window.location.pathname.split('/').filter(Boolean).at(-1))
  if (!profile || !profile.isActive) return <NotFound />
  return <section className="team-subpage agent-profile-page"><a className="team-back-link" href="/team/agents">← Back to team</a><AgentCard profile={profile} showViewProfile={false} /><div className="team-profile-details"><div><p className="team-eyebrow">Service area</p><h2>{profile.location}</h2><p>Khessa can help you compare plan options and understand next steps. For account, payment, or claim questions, use official St. Peter support.</p></div><div className="team-contact-card"><p className="team-eyebrow">Contact Khessa</p><a href={profile.messengerUrl} target="_blank" rel="noopener noreferrer">Messenger <span aria-hidden="true">↗</span></a><a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><p>For official confirmation of agent status, contact St. Peter.</p><a href="https://online.stpeter.com.ph/Home/ContactUs" target="_blank" rel="noopener noreferrer">Official St. Peter support <span aria-hidden="true">↗</span></a></div></div></section>
}

function JoinPage() {
  const reasons = ['Guidance from a Unit Manager', 'Product and sales training', 'Team collaboration', 'Opportunities for personal development', 'Flexible arrangements, subject to actual program terms', 'An opportunity to serve Filipino families']
  const qualities = ['Professionalism and integrity', 'Willingness to learn', 'Clear communication', 'Commitment to client service']
  const steps = ['Express your interest', 'Have an initial team discussion', 'Learn about the role and requirements', 'Complete official onboarding requirements']
  return <section className="team-subpage join-page"><p className="team-eyebrow">Careers with Khessa Daabay</p><h1>Your next career opportunity <em>starts here.</em></h1><p className="team-lede">Explore becoming a St. Peter Sales Counselor and learn about professional development, mentorship, and client service.</p><div className="join-layout"><div><section className="join-content"><p className="team-eyebrow">01 · Why join</p><h2>Learn with support.</h2><ul className="check-list">{reasons.map(reason => <li key={reason}><span aria-hidden="true">✓</span>{reason}</li>)}</ul></section><section className="join-content"><p className="team-eyebrow">02 · Who we’re looking for</p><h2>Bring care and curiosity.</h2><p>We welcome people who value professional conduct, integrity, learning, clear communication, and thoughtful service.</p><ul className="quality-list">{qualities.map(quality => <li key={quality}>{quality}</li>)}</ul></section></div><aside className="join-process"><p className="team-eyebrow">03 · Application process</p><h2>Understand each step.</h2><ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol><p>Role requirements, working arrangements, and onboarding terms are explained by Khessa. No employment, income, or qualification is guaranteed by this website.</p><a className="team-button green" href={`${messenger}?ref=careers`} target="_blank" rel="noreferrer">Apply to join Khessa’s team <span aria-hidden="true">↗</span></a><a className="join-email" href={`mailto:${email}?subject=Interest%20in%20joining%20Khessa%27s%20team`}>Or email Khessa at {email}</a></aside></div><div className="join-privacy"><strong>Privacy and applications</strong><p>This site has no recruitment form and does not collect applicant information. Contact Khessa directly through Messenger or email. She will share the current process and privacy details with you.</p></div></section>
}

function NotFound() { return <section className="team-subpage"><p className="team-eyebrow">Team profile</p><h1>Profile not found.</h1><p className="team-lede">This team page is not available.</p><a className="team-button green" href="/team/agents">Back to the team</a></section> }

const metadata: Record<TeamRoute, { title: string; description: string; path: string }> = {
  home: { title: 'Khessa Daabay Team & Careers', description: 'Meet Khessa Daabay’s team, explore career opportunities, and connect with a St. Peter Unit Manager in Cagayan de Oro.', path: '/team' },
  agents: { title: 'Meet Our Team | Khessa Daabay', description: 'Meet the public team contact for Khessa Daabay’s St. Peter life plan practice in Cagayan de Oro.', path: '/team/agents' },
  profile: { title: 'Khessa Daabay | Team Profile', description: 'Contact Khessa Daabay, St. Peter Unit Manager in Cagayan de Oro, for plan guidance and team inquiries.', path: '/team/agents/khessa-daabay' },
  join: { title: 'Join Khessa’s Team | Career Opportunities', description: 'Learn about the St. Peter Sales Counselor role, team guidance, and the application steps with Khessa Daabay.', path: '/team/join' },
}

export default function TeamSite({ route }: { route: TeamRoute }) {
  const requestedSlug = window.location.pathname.split('/').filter(Boolean).at(-1)
  const knownProfile = route !== 'profile' || agents.some(agent => agent.slug === requestedSlug && agent.isActive)
  const page = knownProfile ? metadata[route] : { title: 'Profile not found | Khessa Daabay', description: 'This team profile is not available.', path: window.location.pathname }
  return <div className="team-site"><TeamHeader /><main id="main" className="team-main">{route === 'home' ? <TeamHome /> : route === 'agents' ? <AgentsDirectory /> : route === 'profile' ? <AgentProfile /> : <JoinPage />}</main><TeamFooter /><title>{page.title}</title><meta name="description" content={page.description} /><link rel="canonical" href={`https://st-peter-by-khessa.vercel.app${page.path}`} /><meta property="og:title" content={page.title} /><meta property="og:description" content={page.description} /><meta property="og:url" content={`https://st-peter-by-khessa.vercel.app${page.path}`} />{!knownProfile && <meta name="robots" content="noindex" />}</div>
}

