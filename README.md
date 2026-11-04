# Login Page

A sign-in page for the Acme workspace demo. It is plain HTML, CSS and JavaScript
with no framework and no build step.

## Features

- Two-column layout that collapses to one column on small screens
- Field-level validation with messages tied to each input
- Password visibility toggle and a Caps Lock warning
- "Remember me" that keeps the username in the browser
- Redirect to the dashboard after a successful sign-in
- Keyboard accessible: labelled inputs, visible focus, a live error region

## Files

| File | Purpose |
|---|---|
| `src/login.html` | The sign-in page markup |
| `src/styles.css` | Styling for the sign-in page and the shared palette |
| `src/script.js` | Page behaviour: validation, toggle, redirect |
| `src/auth.js` | Credential rules, shared by the page and the tests |
| `src/dashboard.html` | The page a successful sign-in opens |
| `scripts/serve.js` | Static file server for local use |
| `scripts/lint.js` | Checks ids, asset links and ARIA references in the HTML |

## Usage

The page loads ES modules, so it needs to be served over HTTP rather than opened
from the file system. Start the server:

```
npm run run
```

It listens on port 8080 and serves the `src` folder. Open `/` for the sign-in page.

## Tests

```
npm test
```

The suite covers the credential rules in `src/auth.js`: input validation, case
handling in usernames, and that the password never comes back in the result.

`npm run lint` checks that the HTML has no duplicate ids, that every referenced
asset exists, and that each ARIA reference points at an element on the page.

## Test account

- Username: `admin`
- Password: `password`

These credentials are checked in the browser. That is fine for a demo and wrong for
a real product: verify credentials on a server, and never send passwords to the
browser. See `docs/adr/0001-plain-html-css-js-stack.md`.

## Customization

The colours, fonts and layout live in `src/styles.css`. The palette is defined once
in the `:root` block at the top of that file.
