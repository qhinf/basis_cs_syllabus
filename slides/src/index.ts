import Reveal from "reveal.js"

import { Tldreveal } from "tldreveal"
import "tldreveal/dist/esm/index.css"

import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm"

import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm"
import "reveal.js/plugin/highlight/zenburn.css"

import RevealNotes from "reveal.js/plugin/notes/notes.esm"

import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/white.css"

import "./index.css"

Reveal.initialize({
    hash: true,
    keyboard: {
        39: "next",
        37: "prev"
    },
    scrollActivationWidth: undefined,
    plugins: [ Tldreveal, RevealMarkdown, RevealHighlight, RevealNotes ],
    tldreveal: {
        isDarkMode: false,
        snapshotUrl: "auto"
    }
})
