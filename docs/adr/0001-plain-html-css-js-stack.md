# ADR-0001: Ship the sign-in page as plain HTML, CSS and JavaScript

## Status

Proposed

## Context

The repository started as static files with no build step and no package manifest.
The sign-in page needs form validation, a password visibility toggle and a redirect
to the dashboard. We need unit tests for the credential rules, and the page must run
from a plain static file server for the live preview.

## Decision

Keep the page framework-free. Use plain HTML, CSS and JavaScript served as static
files, and use the Node.js built-in test runner for the unit tests.

Credential rules live in `src/auth.js` as pure functions. The browser imports that
module directly, and the test suite imports the same module under Node.

## Consequences

- No bundler, transpiler or framework is needed to build or serve the page.
- The browser must load the page over HTTP rather than `file://`, because ES modules
  are blocked on the `file` protocol. `npm run run` starts a static server for that.
- Credential checks run in the browser. This is acceptable for a demo only. A real
  product must verify credentials on a server and never send them to the browser.
