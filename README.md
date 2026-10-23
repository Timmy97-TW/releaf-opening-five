# ReLEAF Opening Five

The five-minute team update for the GEMS Taiwan judging session at the iGEM 2026 Grand Jamboree.
**Room J03, Friday 13 November, 12:00 Paris time** — five minutes of update, then twenty minutes of questions
from four in-person judges.

**[→ Open it](https://timmy97-tw.github.io/releaf-opening-five/)**

Bilingual, English and 繁體中文, switchable in the top right of every page.
Static HTML and vanilla JavaScript: no build step, no server, works offline once loaded.

---

## What iGEM told the judges this session is for

> Judges have already watched your presentation video and read your Wiki. They are there to dig into your
> work, and they want you to succeed. Do not repeat your whole presentation video or Wiki. Share progress
> since the Wiki Freeze, or remind the judges of the strongest parts of your project. Aim for 4–6 slides:
> the problem, your approach, one or two slides of key results, and next steps.

Read against that brief, the five minutes have one job: put the strongest evidence in front of four people
who already know the story, and make it easy for them to ask a good question.

## The deck

Six slides, **4 minutes 20 of speech**, three speakers, two handovers. The handovers are not inside the slide
budgets — add about twenty seconds for them, which puts the real total near 4:40 against a five-minute ceiling.

| # | Slide | Who | Budget |
|---|---|---|---|
| 1 | We built it, we ran it, and it is instrumented | Chloe | 0:35 |
| 2 | Active enzyme in a compartment with no cells in it | Chloe | 0:50 |
| 3 | One experiment had a strain-matched control; one told us spraying late is worse | Abigail | 0:50 |
| 4 | We wrote down what the instrument should do before we tested it | Jacquelyn | 0:55 |
| 5 | Three days unattended, nothing grew from the permeate, and an outsider built our photometer | Jacquelyn | 0:40 |
| 6 | Every stage works on its own. Two joints between them are still open | Jacquelyn | 0:30 |

Slides 2, 4 and 5 are the three nominations — Measurement, Hardware and Integrated Human Practices —
carried as results rather than as claims. The Human Practices argument sits inside slide 1 and slide 3
as the *reason the design looks like this*, not as a list of people the team met.

## The five pages

1. **The Plan** — the session facts, the brief quoted, the running order with the clock, who speaks when and
   why that way round, five rules, the six layout specifications, the honest list, and what could still be
   new by 13 November.
2. **The Deck** — the demo, keyboard-driven. Arrow keys move, `Esc` opens the overview, `T` starts the clock,
   `F` goes fullscreen. A budget rail above the slide, presenter notes below.
3. **The Script** — word for word in both languages, with a words-per-minute reading for every slide, the
   caveat printed on each slide, and the trap on each slide. Prints as a paper script.
4. **Figures** — 36 candidate figures with a verdict each: on a slide, in the backup deck, lost on time rather
   than on quality, or would cost more than it earns. The reasons are the useful part.
5. **Backup** — twenty numbered backup slides and a map from fifteen likely questions to the slide that
   answers them, with the first sentence of each answer.

## Where the content comes from

Every figure and number is from the frozen wiki at [2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/),
and every figure URL on this site returned HTTP 200 from `static.igem.wiki` when it was added.
Nothing was redrawn, recoloured or cropped to look better.

Where two pages of the wiki disagree, a slide carries only the claim both pages support. Where the wiki
states a limit, the limit is printed on the slide in small type rather than left for the answer, because on a
slide it reads as rigour and in an answer it reads as a retreat.

**The honest list** on The Plan collects the numbers and sentences from the team's own pages that will not
survive a judge who checks — six that must never be said, nine to say carefully, and three to fix before the
session. It is the first thing to read, before rehearsing.

## Local preview

Any static server works:

```bash
cd docs && python3 -m http.server 8823
```

## Structure

```
docs/
  index.html  deck.html  script.html  figures.html  backup.html
  assets/css/{base,pages,deck}.css
  assets/js/{site,deck}.js
  data/
    deck.js      the six slides, their budgets, scripts and caveats
    content.js   site prose, the speaker split, layout specs, the honest list
    figures.js   the 36-figure library with its verdicts
    backup.js    type-only backup slides and the question map
```

All four data files are hand-written and bilingual; there is nothing generated and no build step.
`site.js` is the shared chrome: `data-en` / `data-zh` attributes on static text, `Site.t()` for object fields,
one language flag in `localStorage`.

## Related

- **[Judging Trainer](https://timmy97-tw.github.io/releaf-judging-qa/)** — the twenty minutes of questions after
  this deck: seven seats, a mock room, 318 project questions and the full honest list.
- **[ReLEAF wiki](https://2026.igem.wiki/gems-taiwan/)** — the frozen project wiki every figure here comes from.

## Licence

Project facts and figures belong to GEMS Taiwan, iGEM 2026. The wiki is CC BY 4.0.
