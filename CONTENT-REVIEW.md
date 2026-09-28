# Content review — 2026 rebuild

Every page, bio, service and resource link from the previous site was carried
over. This file lists the places where wording is **new** or was **corrected**,
so it can be checked by a clinician before the site goes live on imcare.ca.

## New wording added (please confirm or delete)

| Where | Text | File |
| --- | --- | --- |
| Home hero | "Specialist care, close to home at IMCare" | `_layouts/home.html` |
| Home hero card | "New here? Ask your family doctor to fax a referral to (855) 755-7771, or download our referral form." | `_layouts/home.html` |
| Services | Plain-language `note:` lines under echocardiography, Holter monitoring, stress testing, ABPM and cryotherapy | `_data/services.yml` |
| Services | Group summaries used on the home page cards | `_data/services.yml` |
| Team | The three group headings and their one-line descriptions | `_data/team_groups.yml` |
| Contact | Emergency callout: "If you are having chest pain, difficulty breathing, signs of a stroke…" | `contact.md` |
| Contact | "For referring providers" section | `contact.md` |
| Directions | "When you arrive" — bring health card, medication list, test results | `directions.md` |
| Services | "Echocardiograms are performed in our own echocardiography lab at the Port Hope office by registered cardiac sonographers." | `_data/services.yml` |
| Privacy | "Your personal health information is confidential… ask to speak with our privacy contact." | `privacy-policy.md` |
| Footer | "This website does not provide medical advice. In an emergency, call 911." | `_includes/footer.html` |
| 404 page | Whole page (the old site had none) | `404.html` |

Nothing above states a clinical fact, a wait time, a credential or an hours of
operation that was not already on the old site.

## Corrections made

- **"Defribrillator" → "Defibrillator"** (Patient Tools, two entries).
- **Two identical ICD links merged** into one entry, "Implantable Cardioverter
  Defibrillator (ICD)".
- **"ABC of Melanoma" → "ABCDEs of Melanoma"** to match the page it links to.
- **Broken link fixed:** *Exercise for Bone Health* had a stray apostrophe in
  the URL (`osteoporosis.ca/exercise'`) and did not work.
- **Broken link fixed:** *Portfolio diet* was missing its leading slash, so it
  broke on every page except the home page.
- **Duplicate removed:** "Skin cancer screening" appeared twice in the
  dermatology service list.
- **"Mcgill" → "McGill"** in Dr. Boivin's biography.
- **"Specialist Referrals"** ended with a stray ". ." — removed.
- **Removed a spam link.** The previous Directions page carried a hidden
  "Internet Provider" link to `kbj9qpmy.com`, injected by the third-party map
  embed generator that was used. The map is now a plain Google Maps embed with
  no third-party code and no API key.

## Confirmed by Dr. Bhargava, 5 September 2026

- **Pulmonary Medicine removed.** The service group, its two items and every
  mention in the page descriptions and search metadata are gone. IMCare does
  not offer this service.
- **Clinic hours published:** Monday to Friday, 9:00 am – 5:00 pm, by
  appointment only. They now appear on the home page action strip, the
  Directions page, the Contact page, the footer of every page, and in the
  site's structured data (so Google can show them in search results).
- **No Chest Pain Clinic.** Nothing was added, and nothing referring to one
  exists on the site.
- **Echocardiography lab named.** IMCare's own echo lab is now stated on the
  Services page and in the site description.

## Still worth deciding before launch

1. **The privacy page** on the old site actually contained the practice's
   founding history, not a privacy policy. That text now lives on
   `/about/`, and `/privacy-policy/` links to the privacy PDF.
2. **`/about/` used to be the team page.** It is now a genuine About page that
   links to `/team/`. Any external links to `imcare.ca/about/` will still work
   but will land somewhere different.
3. **13 team members are hidden** (`hidden: true` in `_data/team.yml`) because
   their profiles were switched off on the old site. Worth checking whether any
   should be restored: Darius Seidler, Khalid Pasha, Natasha Thompson, Kaitlin
   Dizon, Sohayla Arabi, Kathleen Bowles, Sarah Saunders, Shannon Murphy, Darla
   Murphy, Kathy Boon, Loretta Tamburello. Obed Adarkwah and Simran Jeet were
   hidden on 8 September 2026 at Dr. Bhargava's request.
4. **External links were not machine-checked.** 60 of the 77 Patient Tools
   links point to other organizations' websites (Ottawa Heart, AAD, Cleveland
   Clinic, Vimeo, YouTube). They should be clicked through once before launch.

## Patient Tools rebuilt in plain language — 8 September 2026

Dr. Bhargava asked for the page to be organized by what a patient actually
came looking for, in words a patient would use.

**All 77 links are still there.** This was verified link-by-link against the
previous version: none lost, none added. What changed is how they are grouped
and what each one is called.

### New topics

| Topic | What it covers | Items |
| --- | --- | --- |
| Staying Well | Food, activity, quitting smoking, knowing when to ask for help | 11 |
| Heart Disease | Chest pain, heart attacks, heart failure, rhythm problems, procedures | 28 |
| Stroke | Warning signs and what to do | 2 |
| Blood Pressure, Diabetes & Cholesterol | The everyday numbers that protect the heart and vessels | 7 |
| Skin & Hair | Rashes, moles, skin cancer, acne, hair loss | 21 |
| Bone Health | Keeping bones strong (osteoporosis) | 2 |
| Getting Ready for Your Test | What to expect and how to prepare | 6 |

The previous groupings — "Decision Making", "Heart & Brain", "Skin", "Bone
Health", "Preparing for Your Test" — are gone. Stroke was pulled out of
"Heart & Brain" into its own topic, and blood pressure, diabetes and
cholesterol were pulled out of the heart handouts into their own topic.

**"Cardiometabolic disease" is titled "Blood Pressure, Diabetes &
Cholesterol"** on the page. The medical term is accurate but is not what a
patient would search for. Say the word if you would rather it carried the
clinical name.

### Two topics are thin

**Stroke has only 2 resources** (the warning-signs handout and one video) and
**Bone Health has 2** (exercise and recipes from Osteoporosis Canada). Both
now have their own card on the page, which sets an expectation the content
does not yet meet. Worth adding a few resources to each, or folding them back
into a neighbouring topic.

### Navigation

- A **topic chooser** at the top: seven cards, each with a plain description
  and a count, jumping to that section.
- The **search box** now hides the chooser while you are searching and reports
  an honest count. Searching matches the resource name and its topic only.
- Within each topic, resources are grouped as **Read about it** / **Watch a
  short video** / **Handouts to print** instead of "Web Resources / Video
  Education / Handouts".
- A **Back to all topics** link closes every section.

### Every reworded link, for checking

77 of the 77 labels were rewritten in plainer language. The
destination of each is unchanged.

| Was called | Now called | Topic |
| --- | --- | --- |
| Blood Pressure Self Management Checklist | Blood pressure tracking checklist | Blood Pressure, Diabetes & Cholesterol |
| Diabetes Medications | Diabetes medicines explained | Blood Pressure, Diabetes & Cholesterol |
| Lp(a) Clinical Guidance | Lipoprotein(a) — an inherited cholesterol risk | Blood Pressure, Diabetes & Cholesterol |
| Control Your Blood Pressure | Lowering your blood pressure | Blood Pressure, Diabetes & Cholesterol |
| Control Your Diabetes | Managing your diabetes | Blood Pressure, Diabetes & Cholesterol |
| Control Your Weight | Managing your weight | Blood Pressure, Diabetes & Cholesterol |
| Personalized Risk Assessment | Your personal risk assessment | Blood Pressure, Diabetes & Cholesterol |
| Exercise for Bone Health | Exercise for strong bones | Bone Health |
| Nutritious Recipes for Bone Health | Recipes for strong bones | Bone Health |
| What is Ambulatory Blood Pressure Monitoring (ABPM)? | 24-hour blood pressure monitoring (ABPM) | Getting Ready for Your Test |
| Stress Echo Instructions | How to prepare for a stress echo | Getting Ready for Your Test |
| Stress Testing Instructions | How to prepare for a stress test | Getting Ready for Your Test |
| Holter Monitor | Wearing a Holter monitor | Getting Ready for Your Test |
| Understanding Holter Monitoring | Wearing a Holter monitor | Getting Ready for Your Test |
| Stress Test | What happens during a stress test | Getting Ready for Your Test |
| Complex Ablation | Ablation for a complex rhythm problem | Heart Disease |
| Angiogram | Angiogram — taking pictures of your heart arteries | Heart Disease |
| Angioplasty | Angioplasty — opening a narrowed artery | Heart Disease |
| TAVI (Transcatheter Aortic Valve Implant) | Aortic valve replacement without open surgery (TAVI) | Heart Disease |
| Cardiac Catheterization & Angioplasty | Cardiac catheterization and angioplasty — what to expect | Heart Disease |
| Angina | Chest pain from the heart (angina) | Heart Disease |
| Therapeutic Hypothermia | Cooling treatment after cardiac arrest (therapeutic hypothermia) | Heart Disease |
| Pacemaker Implantation | Getting a pacemaker | Heart Disease |
| Women & Heart Attack | Heart attack in women — how it can feel different | Heart Disease |
| Heart Failure | Heart failure | Heart Disease |
| Congestive Heart Failure | Heart failure explained | Heart Disease |
| Heart Failure Medications (IMCare) | Heart failure medicines (IMCare) | Heart Disease |
| Heart Function Self Management Checklist | Heart function checklist | Heart Disease |
| Heart Function Self-Management Checklist & Tracker (IMCare) | Heart function checklist and daily tracker (IMCare) | Heart Disease |
| Electrophysiology Studies and Standard Ablation | Heart rhythm testing and ablation | Heart Disease |
| Heart Transplant | Heart transplant | Heart Disease |
| Artery Getting Blocked | How an artery becomes blocked | Heart Disease |
| Implantable Cardioverter Defibrillator (ICD) | Implantable defibrillator (ICD) | Heart Disease |
| Atrial Fibrillation | Irregular heartbeat (atrial fibrillation) | Heart Disease |
| Atrial Fibrillation | Irregular heartbeat (atrial fibrillation) | Heart Disease |
| Atrial Fibrillation (IMCare) | Irregular heartbeat — atrial fibrillation (IMCare) | Heart Disease |
| Living Well with Heart Disease | Living well with heart disease | Heart Disease |
| Coronary Artery Disease Medications (IMCare) | Medicines for narrowed heart arteries (IMCare) | Heart Disease |
| Coronary Artery Disease | Narrowed heart arteries (coronary artery disease) | Heart Disease |
| Pacemaker & Defibrillator | Pacemakers and defibrillators | Heart Disease |
| Recovering from Cardiac Surgery | Recovering from heart surgery | Heart Disease |
| Waiting for Cardiac Surgery | Waiting for heart surgery | Heart Disease |
| Heart Attack (Blockage) | What happens in a heart attack | Heart Disease |
| Skin care for acne patients | Acne — habits to stop | Skin & Hair |
| Acne | Acne — skin care that helps | Skin & Hair |
| Basal Cell Skin Cancer | Basal cell skin cancer | Skin & Hair |
| ABCDEs of Melanoma | Checking a mole — the ABCDEs | Skin & Hair |
| Eczema | Eczema (atopic dermatitis) | Skin & Hair |
| Alopecia / Hair Loss | Hair loss (alopecia) | Skin & Hair |
| Self Skin Examination | How to check your own skin | Skin & Hair |
| Self Skin Exam | How to examine your own skin | Skin & Hair |
| Prevention of Skin Cancer | How to prevent skin cancer | Skin & Hair |
| Sensitive Skin | Looking after sensitive skin | Skin & Hair |
| Managing your hair loss | Managing hair loss | Skin & Hair |
| Patch Testing | Patch testing — finding what your skin reacts to | Skin & Hair |
| Contact Dermatitis | Rash from something you touched (contact dermatitis) | Skin & Hair |
| Actinic Keratosis | Rough, scaly spots (actinic keratosis) | Skin & Hair |
| Actinic Keratosis | Rough, scaly spots (actinic keratosis) | Skin & Hair |
| Squamous Cell Carcinoma | Squamous cell skin cancer | Skin & Hair |
| How to take photos of skin conditions for a virtual visit | Taking a photo of your skin for a video visit | Skin & Hair |
| Sunburn | Treating a sunburn | Skin & Hair |
| Hair Loss | Types of hair loss | Skin & Hair |
| Melanoma Warning Signs | Warning signs of melanoma | Skin & Hair |
| What to expect during a skin cancer check? | What happens at a skin cancer check | Skin & Hair |
| Become Smoke Free | Becoming smoke free | Staying Well |
| Control Your Cholesterol | Canada's Food Guide — healthy eating | Staying Well |
| Alphabetical List of Decision Aids by Topic | Decision guides, listed by topic | Staying Well |
| Forks Over Knives Movie | Forks Over Knives — a documentary about food and health | Staying Well |
| Cardiac Rehabilitation – Physical Activity | Getting active again after a heart problem (cardiac rehab) | Staying Well |
| NIH Health Topics A-Z | Health topics A to Z (US National Institutes of Health) | Staying Well |
| Heart Healthy Living | Heart-healthy living | Staying Well |
| Ottawa Personal Decision Guide for Two | Making a decision together with someone else | Staying Well |
| Portfolio Diet | The Portfolio Diet — eating to lower cholesterol | Staying Well |
| Ottawa Personal Decision Guide | Weighing up a treatment choice — decision guide | Staying Well |
| Symptom Recognition Checklist | When should I call? A symptom checklist | Staying Well |
| Signs of a Stroke | How to recognize a stroke | Stroke |
| Stroke Warning Signs | Warning signs of a stroke | Stroke |

## Beyond the Heartline — added 8 September 2026

Dr. Bhargava's Substack, linked from four places, all driven by one block in
`_data/site.yml`. Delete that block and every link disappears at once.

| Where | How it appears |
| --- | --- |
| Patient Tools | A highlighted panel above the topic chooser — the most visible spot on the page |
| Patient Tools → Staying Well | First item under "Read about it" |
| About IMCare | Its own section, headed "Beyond the Heartline" |
| Footer, every page | "Beyond the Heartline" in the Site list |

The wording on the site is the publication's own name and its own description,
taken from the newsletter's RSS feed rather than written for it:

> **Beyond the Heartline** — Dr. Bhargava's newsletter
> A newsletter exploring the intersection of medicine, technology, and human
> experience, written by a physician passionate about AI, creativity, and
> compassionate care.

Both lines are in `_data/site.yml` under `substack:`; editing them there
updates all four places together.

The link is the publication address, `beyondtheheartline.substack.com` — more
durable than a Substack profile URL, which changes if the handle changes.

**Not done, worth considering:** the page does not list recent posts. Titles
would go stale the moment a new one is published, and a static site cannot
read the feed at page load without JavaScript that Substack's CORS policy may
block. If recent posts on the site are wanted, the reliable route is to add
the three or four current titles to `_data/site.yml` by hand and refresh them
when a new post goes out.

## Live-site check — 8 September 2026

The site went live at `mbhargava6.github.io/IMCare2027/` and was checked in a
real browser rather than only against the local build.

**Passed:** all 9 pages return 200; all 59 internal URLs resolve (pages, the
29 PDFs, images, CSS, JS) with nothing broken; no broken images; the crimson
palette, 17px base type and warm background all render as intended.

**One bug found and fixed.** The `@font-face` rule pointed at
`/assets/fonts/playfair-display.woff2` — a path from the site root. Once
`baseurl: "/IMCare2027"` was added, that address 404'd and every heading fell
back to Georgia. Nothing visibly failed: the page just quietly rendered in the
wrong typeface. The rule now uses `../fonts/…`, relative to the stylesheet, so
it resolves both under the project URL and later at imcare.ca.

Worth remembering: **`relative_url` only applies inside Liquid templates.**
Paths written inside a plain `.css` file get no baseurl, so any future
`url(...)` in the stylesheet should be written relative to the stylesheet.

## Changes requested 19 September 2026

| Change | Where it now appears |
| --- | --- |
| "Cardiac Stress Testing" → **"Exercise Cardiac Stress Testing"** | Home page diagnostic services list; also changed on the Services page and in the page's search description, so the service is named the same way everywhere |
| **"Closed on statutory holidays."** | Home page hours tile, Contact, Directions, and the footer of every page |
| **48 hours' notice to change or cancel** | Contact (first line under Appointments) and Directions, both in bold |
| British → Canadian spelling | "organisations" → "organizations" on Patient Tools; "How to recognise a stroke" → "recognize" |

### Notes on each

**Exercise cardiac stress testing.** You pointed at the diagnostic services
list, but the same test was named "Cardiac stress testing" on the Services
page too. Both are changed — naming one test two ways on one website invites
the question of whether they are two different tests. This also now reads
distinctly from the stress echo, which has its own preparation handout.

**Statutory holidays.** Added as you suggested. On the home page it sits in
the hours tile, which previously repeated the street address — the address is
in the footer and one click away on Directions, so the tile now completes the
hours instead. It is not in the machine-readable opening hours that Google
reads, because the schema has no way to say
"statutory holidays" without listing each date; the hours there still read
Monday–Friday 09:00–17:00.

**48 hours.** This replaced the softer line that previously read "please let us
know as early as you can". Both sentences live in `_data/site.yml` under
`cancellation_notice`, so the wording can be adjusted in one place.

**Spelling.** The fix was not one word. The site also had "How to recognise a
stroke" on the Patient Tools page. Canadian English keeps the British
*-our* and *-re* endings (colour, centre) but takes the American *-ize*, so
those were left alone and only the *-ise* forms changed. A sweep confirms no
*-ise* spellings remain in any patient-facing text.

## Dr. Sharma's biography rewritten — 19 September 2026

Replaced word-for-word with text supplied by Dr. Bhargava. The previous version
listed thyroid disorders and inflammatory arthritis among her interests; the
new one states she is not accepting new patients for either.

Two things left as they were, for a decision:

1. **Her listed role is still "Internal Medicine Specialist."** The new
   biography is dermatology-led — skin disease, dermoscopy, teaching
   dermoscopy. A patient scanning the role line rather than reading the
   paragraph may not realise she is the person to see about a mole. Worth
   considering whether the role should say so.
2. **The "not accepting new patients" sentence sits only in her biography.**
   It is the kind of line patients miss and referring offices need. If it
   should be more prominent — on the Services page, or alongside the referral
   instructions on Contact — say so and it can be surfaced there too.


## Production migration — 28 September 2026

- Imported the redesign into `imcare-canada/imcare-canada.github.io`, retaining
  the production `CNAME` and existing Pages/domain settings.
- Set the production URL to `https://imcare.ca` with an empty `baseurl`.
- Added GitHub Pages-compatible redirects for the 19 old team profile URLs,
  eight old template service URLs, and `/securemessage.html`.
- Replaced broken catheterization/angioplasty and skin self-exam links with
  current resource pages from the University of Ottawa Heart Institute and
  American Academy of Dermatology.
- Replaced the retired therapeutic-hypothermia landing page with the Heart
  Institute's currently listed recovery-after-cardiac-arrest guide; updated
  its label to match the destination.
- Kept the logo's proportions and used the menu layout below 1200px so the
  desktop navigation no longer compresses the logo.
- Confirmed the old diabetes-medications page displays "Access denied" in a
  browser, then replaced it with Diabetes Canada's medication-management
  resource and updated the label to match.
