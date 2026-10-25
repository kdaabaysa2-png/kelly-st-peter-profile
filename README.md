# Khessa Daabay · St. Peter Unit Manager

Personal professional profile for Khessa Daabay. This is independently maintained and is not St. Peter’s corporate website.

Production: https://st-peter-by-khessa.vercel.app/

## Development

Use the existing Node, React, TypeScript, and Vite stack.

- `npm ci`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

The production output is `dist/`. The existing Khessa-owned GitHub repository remains connected to her Vercel project. No database, paid service, or analytics was added.

## Source map

- `src/main.tsx`: React entry point.
- `src/Profile.tsx`: profile content, contact links, exact plan schedules, consultation message, accessible navigation, client gallery, FAQs, privacy notice, terms, and error state.
- `src/Team.tsx` and `src/agents.ts`: Team & Careers routes and structured, owner-approved public agent profiles.
- `src/team.css`: responsive team microsite styles.
- `src/profile.css`: emerald and ivory design, responsive layouts, keyboard focus, photo motion, and reduced-motion support.
- `index.html`: home metadata, canonical URL, and social sharing image.
- `vite.config.ts`: build settings, legal page metadata, version file, and removal of retired portfolio assets from the published output.
- `vercel.json`: existing-host deployment support, security headers, clean URLs, and redirects for old profile links.
- `public/images/profile/`: authentic supplied corporate photograph.
- `public/images/client-stories/`: supplied client celebration graphics.
- `public/og-khessa.png`, `favicon.svg`, `apple-touch-icon.png`: personal sharing and icon assets.
- `public/sitemap.xml` and `robots.txt`: indexable routes.

## Team and Careers pages

The existing Vercel project serves these routes:

- `/team`: overview with career and client contact paths.
- `/team/agents`: public team directory.
- `/team/agents/khessa-daabay`: Khessa’s profile.
- `/team/join`: recruitment information and contact steps.

The pages reuse this repository and deployment. The homepage links to `/team` from its navigation, footer, and careers callout. Each team route gets its own title, description, canonical URL, social metadata, and sitemap entry at build time. Active agent profile routes are generated from `src/agents.ts`.

To add an agent, add a record to `src/agents.ts` with a real name, approved portrait, role, location, introduction, and contact links. Set `isActive` to `false` while the profile is a draft. Use a unique URL-safe `slug` and set `displayOrder` to control its position. Do not set `isVerified` until St. Peter confirms the status. Active profiles and their SEO metadata are generated from this data at build time. Do not add contact information or credentials without the person’s consent. For later agent growth, the central `agents` array is the data boundary that a private admin or database layer can replace.

Recruitment interest goes to Khessa through Messenger or email. This microsite does not collect applicant details and does not use the existing client plan application form for recruitment.

## Product data sources

All listed prices and installment figures were checked on 24 October 2026. Rates are copied from the schedules. No missing figures were calculated.

- Five-year brochure: https://online.stpeter.com.ph/PDF/TradPlans.pdf
- Seven-year brochure: https://online.stpeter.com.ph/PDF/TradPlans7years.pdf
- Live official listings: https://online.stpeter.com.ph/Product/Index/LP
- Official support: https://online.stpeter.com.ph/Home/ContactUs
- Official payment channel: https://online.stpeter.com.ph/Paybill/Index

The five-year brochure describes St. Claire as a metal casket with a single top, half-lid cover, and half glass. This corrects the old profile’s full-lid description. Seven-year options are shown only for St. George and St. Gregory. Benefits and account-specific conditions require the current Life Plan Agreement and St. Peter confirmation.

## Contact and data handling

- Facebook: https://www.facebook.com/cwb.salesagent1
- Messenger: https://m.me/cwb.salesagent1
- Email: kdaabay.sa2@gmail.com
- Designated external application: https://tally.so/r/Y5AlPv
- Agent code supplied by the owner: CAGAYA23SA100098
- Referral code supplied by the owner: KHES6283

The website does not send inquiries, collect IDs, accept payments, or store applications. A plan inquiry produces a copyable message for the visitor to paste into Messenger. No message is sent automatically.

The external Tally form requests personal details, valid ID, signature specimens, and a payment receipt. It shows payment QR codes. No privacy notice was visible during the read-only review. The site instructs visitors to ask for the privacy notice, recipient, retention details, and official payment authorization before uploading or paying. Form ownership, privacy process, and QR payees require owner confirmation. These were not inferred or changed.

The public Facebook page and supplied form identify Cagayan de Oro City. Agent status and supplied codes have not been independently confirmed with St. Peter. Codes are presented as contact details rather than licensing proof. No credentials, quotes, awards, service guarantees, or customer statistics were invented.

Gallery photos were supplied for publication in the preceding work. The document shown in one photograph is covered in the interface. Original photo files remain in repository history. The owner remains responsible for client publication consent and any requested source removal.

## Verification

- TypeScript and Vite production build passed.
- ESLint passed without warnings.
- Responsive browser checks at 320, 375, 390, 428, 768, 1024, and 1440 pixels showed no horizontal page overflow and no missing in-page anchor targets.
- Five-year and seven-year filters, quarterly frequency, plan-specific inquiry text, clipboard copy, Escape dismissal, and focus return were checked.
- All 35 published numeric schedule values were matched to the official brochures.
- The external application, professional Facebook page, email destination, and official links were reviewed. No application, payment, or message was submitted.
- The Messenger short link resolves to the professional page’s conversation endpoint. The current browser requests a chat-restoration PIN before showing the conversation.
- Reduced-motion and visible-focus rules are included. No OS preference was changed for testing.

## Credits

Derived from https://github.com/brewed-ops/portfoliov2-template. Keep the original LICENSE. Geist is supplied under its included font license. Official product photographs and St. Peter naming identify the referenced products.
