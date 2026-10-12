# Job10 — Premium HTML Email Marketing Campaign
### Implementation Guide & Campaign Specification

**Creative Direction & Development Standards:**
Built by Senior Email Marketing Designer & Frontend Email Developer for high-converting B2B and consumer delivery.

---

## 1. Campaign Structure & Assets

```
email-campaign/
├── jobseeker.html              # Variant A: Jobseeker promotional email (HTML5 / Table-based)
├── jobseeker.txt               # Variant A: Plain-text fallback version
├── recruiter.html              # Variant B: Recruiter promotional email (HTML5 / Table-based)
├── recruiter.txt               # Variant B: Plain-text fallback version
├── general.html                # Variant C: Combined audience email (HTML5 / Table-based)
├── general.txt                 # Variant C: Plain-text fallback version
├── assets/                     # Email-optimized retina visuals (PNG/JPEG)
│   ├── job10-logo.png          # High-DPI transparent logo (5.4 KB, Outlook safe)
│   ├── hero-jobseeker.jpg      # Optimized jobseeker hero banner (93.0 KB)
│   ├── hero-recruiter.jpg      # Optimized recruiter tablet showcase (45.5 KB)
│   └── hero-combined.jpg       # Optimized combined platform hero (84.6 KB)
├── README.md                   # Quick start summary
└── IMPLEMENTATION_NOTES.md     # In-depth technical & marketing documentation
```

> **Note on Asset Hosting:**
> All images are mirrored in `/public/images/email/` and can be served directly from the Job10 website deployment at `https://job10.ai/images/email/`. They are also provided in `email-campaign/assets/` if your Email Service Provider (ESP) requires uploading to its own media library/CDN.

---

## 2. Campaign Variants: Subject Lines & Content Strategy

### Variant A — Jobseeker Campaign
* **Target Audience:** Professionals seeking career progression, career switchers, and passive candidates.
* **Subject Line:** `Your next opportunity could be closer than you think`
* **Preheader:** `Discover jobs matched to your skills and experience with Job10.`
* **Hero Headline:** `Your next opportunity starts with a better match.`
* **Primary Value Props:**
  1. *Discover relevant job matches* — Curated opportunities scored against specific candidate backgrounds.
  2. *Highlight your skills and experience* — Verified competency profiles presented directly to employers.
  3. *Explore opportunities with greater confidence* — Direct connections to verified hiring teams without resume black holes.
* **Primary CTA:** `Find My Next Job →`
* **Closing CTA:** `Explore Jobs →`
* **Destination URL:**
  `https://job10.ai/?role=jobseeker&utm_source=email&utm_medium=email&utm_campaign=job10_launch&utm_content=jobseeker_hero#jobs`

---

### Variant B — Recruiter Campaign
* **Target Audience:** Heads of Talent, Hiring Managers, Founders, and Internal Talent Acquisition teams.
* **Subject Line:** `Great candidates. Less time searching.`
* **Preheader:** `Discover smarter candidate matching with Job10.`
* **Hero Headline:** `Your next great hire is closer than you think.`
* **Primary Value Props:**
  1. *AI-Powered Job Matching* — Algorithmic competency scoring aligning candidate skills with open requisitions.
  2. *Real-Time Talent Matches* — Instant notifications when pre-vetted candidates enter the talent market.
  3. *Private Talent Vault* — Searchable, private workspace for tracking and re-engaging candidate pipelines.
* **Primary CTA:** `Start Hiring →`
* **Closing CTA:** `Find Talent →`
* **Destination URL:**
  `https://job10.ai/?role=recruiter&utm_source=email&utm_medium=email&utm_campaign=job10_launch&utm_content=recruiter_hero#talent`

---

### Variant C — Combined Campaign (General Audience)
* **Target Audience:** Unsegmented subscriber lists, platform waitlists, early registrations, or community newsletters.
* **Subject Line:** `Your next opportunity. Your next great hire.`
* **Preheader:** `Discover a smarter way to connect talent and opportunity.`
* **Hero Headline:** `The right people. The right opportunities.`
* **Audience Selector Block:**
  * **For Jobseekers (Lavender Treatment `#F5F3FF`):**
    * Headline: `For Jobseekers`
    * Copy: `Find opportunities aligned with your skills, experience, and ambitions.`
    * CTA: `Explore Jobs →`
    * URL: `https://job10.ai/?role=jobseeker&utm_source=email&utm_medium=email&utm_campaign=job10_launch&utm_content=combined_jobseeker#jobs`
  * **For Recruiters (Warm Neutral Treatment `#FFF7ED`):**
    * Headline: `For Recruiters`
    * Copy: `Discover candidates who match your hiring requirements.`
    * CTA: `Find Talent →`
    * URL: `https://job10.ai/?role=recruiter&utm_source=email&utm_medium=email&utm_campaign=job10_launch&utm_content=combined_recruiter#talent`
* **Closing CTA:** `Get Started on Job10 →`
* **Destination URL:**
  `https://job10.ai/?utm_source=email&utm_medium=email&utm_campaign=job10_launch&utm_content=combined_closing`

---

## 3. Destination Routing & Audience Initialization

The Job10 website uses dynamic audience state (`recruiter` vs `jobseeker`). To prevent any scenario where a recruiter lands on the jobseeker experience (or vice versa), the web app has been updated in `AudienceContext.tsx`:

1. **URL Parameter Override:**
   Whenever a link contains `?role=jobseeker` or `?role=recruiter` (or `?audience=...`), the application:
   - Sets the active view immediately to the matching audience.
   - Suppresses the initial audience selection modal popup.
   - Synchronizes `localStorage.setItem("job10_audience_role", role)`.
2. **Anchor Navigation:**
   Appended hash fragments (e.g. `#jobs` and `#talent`) guide the user directly to the relevant interactive section on page load.
3. **UTM Attribution:**
   Consistent UTM conventions are applied:
   - `utm_source=email`
   - `utm_medium=email`
   - `utm_campaign=job10_launch`
   - `utm_content=[variant]_[placement]`

---

## 4. Technical Email Architecture

| Standard | Implementation in Job10 Campaign |
| :--- | :--- |
| **Doctype** | XHTML 1.0 Transitional with XML namespaces for Microsoft Office (`o:OfficeDocumentSettings`) |
| **Max Content Width** | `600px` centered via MSO conditional tables (`<!--[if (gte mso 9)|(IE)]>`) |
| **CSS Architecture** | 100% inline CSS on every layout node + minimal `@media (max-width: 620px)` stylesheet |
| **Typography** | `General Sans` (Fontshare WOFF2 via `@font-face`) with bulletproof fallback stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`) |
| **Outlook MSO Fix** | Explicit MSO font override resetting all typography to `Arial, Helvetica, sans-serif` in Word rendering engines |
| **Buttons** | Table-based padded buttons with `border-radius`, background color, and Outlook letter-spacing spacers (`mso-padding-alt: 0`) |
| **Images** | Explicit HTML `width` & `height` attributes + CSS `max-width: 100%; height: auto;` to prevent layout collapse before download |
| **Preheader Anti-Peek** | Zero-width non-breaking spaces (`&#847;&zwnj;&nbsp;`) preventing email client snippet engines from scraping body text |
| **Payload Size** | ~24–27 KB per template (well under the 102 KB Gmail clipping threshold) |

---

## 5. ESP Merge Tag Substitution Guide

Before sending via your marketing platform, verify the unsubscribe tag:

| ESP | Unsubscribe Tag Placeholder in HTML |
| :--- | :--- |
| **Klaviyo** | `{% unsubscribe %}` |
| **Mailchimp** | `*|UNSUB|*` |
| **Customer.io** | `{{unsubscribe_url}}` *(default in templates)* |
| **HubSpot** | `{{unsubscribe_link}}` |
| **SendGrid** | `{{asm_group_unsubscribe_url}}` or `{{{unsubscribe}}}` |
| **Braze** | `${unsubscribe_url}` |

---

## 6. QA Verification Matrix

* [x] **Gmail Desktop (Chrome, Safari, Firefox):** Renders clean 600px container, fonts render smoothly, buttons retain hover effect.
* [x] **Gmail iOS / Android App:** Viewport responsive, headline scales to 28px, full-width touch targets.
* [x] **Outlook Desktop (2016 / 2019 / 365):** MSO conditional tables prevent width blowout; PNG logo displays correctly (no SVG dependency); table buttons render intact.
* [x] **Apple Mail (macOS & iOS):** General Sans webfont loads; retina hero photos render sharply.
* [x] **Images Blocked Mode:** Descriptive alt texts are styled with fallback font sizes and brand colors.
* [x] **Gmail Clipping Test:** Raw HTML files are 25–27 KB (75% below the 102 KB threshold).
