# Team principles

Every review in this project checks work against these lines. Keep each one short and testable. Edit, add or remove lines to match how the team works.

## Code

- Follow the patterns the surrounding code already uses unless a decision record says otherwise.
- Keep changes small and focused on one purpose.
- Name things with the terms in the glossary.
- Remove code that nothing uses instead of leaving it commented out.

## Tests

- Every change in behaviour comes with a test that fails without it.
- Tests check behaviour through public interfaces, not internal details.
- The build and the full test suite pass before work is called done.

## Security

- Keys, tokens and passwords never appear in code, logs, commits or docs.
- Treat every outside input as untrusted and validate it where it enters.

## Docs

- A hard-to-reverse choice gets a decision record in the same change.
- Specs and docs are updated in the same change as the behaviour they describe.

## Project principles

- The sign-in page ships as plain HTML, CSS and JavaScript with no framework or build step, so it opens directly in a browser. Source: `README.md` and the existing `src/` folder.
- Credential checks live in `src/auth.js` so the browser and the test suite run the same rules. Source: `test/auth.test.js`.
- The page targets WCAG 2.1 AA: labelled inputs, visible focus, a live error region and reduced-motion support. Source: `src/login.html` and `src/styles.css`.
