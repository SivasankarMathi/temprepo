# temprepo

A scratch repository for small experiments and prototypes. It exists to try things out
before they move into a real project.

## Current state

`main` holds only this README. Earlier work lives on feature branches — the
`feat/login-page` branch has a standalone `login.html` — and has not been merged.

## Using it

Clone the repository, create a branch for what you are trying, and open a pull request
when the experiment is worth keeping.

```bash
git clone https://github.com/sivasankarmathi/temprepo.git
cd temprepo
git checkout -b feat/your-experiment
```

There is no build, test, or lint setup, and no dependency manifest. Keep each experiment
self-contained in a single file unless it needs more.
