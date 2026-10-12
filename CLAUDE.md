# Portfolio — working guidelines

Personal portfolio for Kent Paul Vergara. React 18 + Vite, no router, no UI library. All content lives in `src/main.jsx`; all styles in `src/styles.css`.

## How to work in this repo

Adapted from Andrej Karpathy's observations on LLM coding mistakes (github.com/forrestchang/andrej-karpathy-skills).

1. **Think before coding.** State assumptions. If a request has more than one reading, say so and ask instead of guessing. Suggest a simpler approach when there is one.
2. **Simplicity first.** Write the least code that does the job. No speculative features, one-off abstractions, or configuration nobody asked for. No new dependencies without a clear reason.
3. **Surgical changes.** Touch only what the task needs and match the surrounding style. Mention unrelated dead code instead of deleting it; only remove what your own change made obsolete. Every changed line should trace back to the request.
4. **Goal-driven execution.** Decide up front how you'll know it works, then check: `npm run build` passes, and the page is reviewed in a browser at desktop and phone widths (and with reduced motion for animation changes).

## Project notes

- Contact links, project data, and optional video paths are plain objects at the top of `src/main.jsx`. Empty values are hidden on the page.
- Static files (résumé PDF, videos, favicon) go in `public/`.
- Animations must respect `prefers-reduced-motion`.
