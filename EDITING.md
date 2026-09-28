# Editing this website

Everything below can be done by editing a text file. Nothing here requires
knowing HTML or CSS. After you save and commit a change, GitHub rebuilds the
site — usually live within a minute or two.

**Working in Cowork?** Just say what you want changed, e.g. *"add Dr. Chen to
the team, cardiologist, joined 2026"* or *"change the fax number"*, and the
file below is the one that gets edited.

---

## The everyday jobs

### Change the phone number, fax, address, or opening hours

`_data/site.yml`. Change the value, keep the quotes.

Hours appear in four places automatically — the home page, Directions, Contact
and the footer. If you change them, also change `opens:` and `closes:` (24-hour
clock) so Google keeps showing the right hours in search results.

If you change the phone number, change **both** `phone` (what people read) and
`phone_link` (what the tap-to-call button dials — digits only, with `+1`).

### Add someone to the team

`_data/team.yml`. Copy an existing block and change the details:

```yaml
- name: "Jane Chen, M.D."
  role: "Cardiologist"
  group: physicians          # physicians | clinical | coordinators
  photo: "jane-chen.jpg"
  bio: "Dr. Chen joined IMCare in 2026."
```

Then put a photo in `images/team/` with exactly the filename you used. Square
photos look best — 640×640 pixels is ideal. Anything square will work.

### Remove someone from the team

Add one line to their block:

```yaml
  hidden: true
```

Their photo and bio stay in the file, so you can put them back later by
deleting that line. To remove them permanently, delete the whole block.

### Reorder the team

Order on the page follows order in the file. Move a block up or down.

### Add or change a service

`_data/services.yml`. Each service can have:

- `name` — required
- `note` — optional one-line plain-language explanation
- `link` and `link_label` — optional video or handout ("video" or "handout")

### Add a patient handout

1. Put the PDF in `assets/pdf/`. Use a lowercase filename with no spaces,
   e.g. `managing_high_cholesterol.pdf`.
2. Add it to `_data/patient_tools.yml` under the right section:

```yaml
        - name: Managing High Cholesterol
          link: /assets/pdf/managing_high_cholesterol.pdf
```

The leading `/` matters. Links that start with `http` point to other websites
and open in a new tab; the PDF/Video/Web label is worked out automatically.

### Add a patient comment

`_data/testimonials.yml`. The home page shows the first six.

### Change the words on a page

Each page is one file:

| Page | File |
| --- | --- |
| Home | `index.md` |
| Services | `services.md` and `_data/services.yml` |
| Our Team | `team.md` and `_data/team.yml` |
| Patient Tools | `patient-tools.md` and `_data/patient_tools.yml` |
| Directions | `directions.md` |
| Contact | `contact.md` |
| About | `about.md` |
| Privacy | `privacy-policy.md` |

The block at the top between `---` lines controls the page title, the large
heading, and the introductory sentence. Everything below it is the page body.

### Change the menu

`_data/nav.yml`. `main` is the header menu, `footer` is the footer list.

### Change the colours

`_data/site.yml` → `palette:` → `crimson` or `clinical`.

To fine-tune a colour rather than switch schemes, edit the variables at the top
of `assets/css/style.css`.

---

## Rules that keep things working

1. **Indentation in `.yml` files is meaningful.** Copy an existing block rather
   than typing one from scratch, and keep the spaces lined up.
2. **Keep the quotes** around text values, especially any text containing
   `:` or `#`.
3. **Filenames are case-sensitive.** `Jane-Chen.jpg` and `jane-chen.jpg` are
   different files.
4. **Internal links start with `/`** — `/team/`, `/assets/pdf/thing.pdf`.
5. **Don't rename a page file** without also checking anything that links to
   it. Old links break silently.

## If something looks wrong after a change

Check the **Actions** tab in GitHub. A red mark means the build failed —
almost always a YAML indentation or quoting problem, and the message names the
file and line. The previous version stays live until the build is green again.
