# ZahkMath website

A simple website for IB Mathematics materials, made for GitHub Pages.
It has no build step: you edit a few small files and the site updates itself.

## What is where

| File / folder | What it does | Do you edit it? |
|---|---|---|
| `index.html` | Home page (ZahkMath title and links) | Rarely |
| `about.html` | About me / tutoring page | **Yes**: your name, text, photo, email |
| `data/aa-hl.js`, `data/aa-sl.js`, `data/ai-hl.js`, `data/ai-sl.js` | One file per course. Every IB subtopic (1.1, 1.2, …) is already listed with empty spaces for your files | **Yes**: this is where you add materials |
| `data/videos.js` | Your YouTube videos | **Yes** |
| `data/interactive.js` | Interactive notes (Desmos, GeoGebra, your own HTML pages) | **Yes** |
| `files/aa-hl/` … `files/ai-sl/` | Put your **free** PDFs here | **Yes** |
| `interactive/` | Put your own interactive HTML pages here | Optional |
| `images/` | Your photo, logo, etc. | Optional |
| `js/site.js` | Builds the pages. Change your email and YouTube channel in the `SETTINGS` block at the top | Only `SETTINGS` |
| `js/syllabus.js` | The IB subtopic list | No |
| `css/style.css` | Colours and design (royal blue & gold) | Optional |
| `course.html`, `topic.html`, `videos.html`, `interactive.html`, `shop.html` | Page templates, filled in automatically | No |

## Adding notes and worksheets (free)

1. Upload the PDF to the right folder, e.g. `files/aa-sl/1.2-notes.pdf`
   (on GitHub: open the folder → **Add file → Upload files**).
2. Open `data/aa-sl.js`, find subtopic `"1.2"` and fill in the path:

```js
"1.2": {   // Arithmetic sequences and series
  notes: "files/aa-sl/1.2-notes.pdf",
  worksheet: "files/aa-sl/1.2-worksheet.pdf",
  worksheetSolutions: "files/aa-sl/1.2-worksheet-solutions.pdf",
  exam: "files/aa-sl/1.2-exam-questions.pdf",
  examSolutions: "files/aa-sl/1.2-exam-solutions.pdf",
  video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  extra: []
},
```

3. Commit. The site updates within a minute or two.

Anything left as `""` shows on the site as a grey **soon** label, so pages always look complete.

**Tip:** If the SL and HL materials are the same (subtopics shared by both levels),
you can point both course files to the same PDF. You don't need to upload it twice.

**Tip:** Use simple file names with no spaces: `1.2-notes.pdf`, not `Arithmetic Sequences Notes (final).pdf`.

## Selling worksheets and revision packs

GitHub Pages only shows files. It cannot take payments, and **everything in a public
repository can be downloaded by anyone**. So:

- **Never upload paid PDFs to this repository.**
- Upload them to a shop service that takes the payment and emails the file,
  for example **Payhip**, **Gumroad**, **Lemon Squeezy** or a **Stripe Payment Link**.
  Payhip and Gumroad are the simplest: you upload the PDF, set a price and get a product link.
- Paste the product link into the course file:

```js
// one subtopic: extra paid items under the free ones
"1.2": {
  ...
  extra: [
    { title: "Extra exam-style questions", price: "CHF 4", buy: "https://payhip.com/b/AbCd" }
  ]
},

// a whole topic: revision pack at the top of the topic page
topicPacks: {
  1: [ { title: "Topic 1 Revision Pack", price: "CHF 9", buy: "https://payhip.com/b/XyZw" } ],
  ...
}
```

Paid items appear automatically on the topic page **and** on the **Shop** page.

## Videos

Open `data/videos.js` and add one block per video (newest first):

```js
window.VIDEOS = [
  { title: "Arithmetic sequences in 5 minutes", youtube: "https://youtu.be/XXXXXXXXXXX", course: "all", subtopic: "1.2" },
];
```

`course` can be `"aa-hl"`, `"aa-sl"`, `"ai-hl"`, `"ai-sl"` or `"all"`. The thumbnail is taken from YouTube automatically.
To also show the video next to the subtopic, paste the same link into `video:` in the course file.

## Publishing on GitHub (replacing your current site)

Your current site is the repository **zahkmath.github.io** with the domain **www.zahkmath.com**.

1. In that repository, delete the old files **except `CNAME`**. That file keeps your domain working.
   (If `CNAME` is missing later, add it again: a file named `CNAME` containing `www.zahkmath.com`.)
2. Upload everything from this folder, including the hidden file `.nojekyll`.
   The easiest way is **Add file → Upload files** and drag in all the files and folders.
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Wait a minute and open https://www.zahkmath.com

## Previewing on your computer

Double-click `index.html` to open it in your browser. All pages work offline,
apart from the YouTube thumbnails and the fonts.

---
Syllabus subtopics follow the IB Mathematics AA and AI guides (first assessment 2021).
