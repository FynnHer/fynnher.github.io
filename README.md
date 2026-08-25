# fynn-lasse.de

My personal site — [fynn-lasse.de](https://fynn-lasse.de).

Static HTML, one hand-written stylesheet, and about 100 lines of vanilla JavaScript.
No build step, no framework, no dependencies. GitHub Pages serves the repository root as-is.

## Layout

```
index.html          Landing page — intro, selected work, what I do
projects.html       All public projects, filterable by area
about.html          Longer bio, stack, timeline, DLRG
contact.html        How to reach me (GitHub)
blog/index.html     Notes — empty for now, by choice
404.html            Not-found page
assets/css/style.css   The entire design system
assets/js/main.js      Nav, theme toggle, scroll reveal, project filters
```

## Design

Warm brutalist: paper background, heavy ink, hard borders and offset shadows, a single
vermilion accent. Light and dark are both first-class — the page follows the operating
system by default, and the toggle in the navigation overrides it and is remembered in
`localStorage`.

Type is Archivo Black for display, Space Grotesk for body copy, JetBrains Mono for labels.

## Running it locally

Any static server will do:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Editing

Pages are plain HTML and can be edited directly. The navigation and footer are duplicated
across pages — if you change one, change all five.
