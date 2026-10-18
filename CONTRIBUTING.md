# Contributing

Nymrel Swarm Studio is intentionally narrow: a truthful, static reference interface. Contributions must preserve that boundary.

## Setup

Use Node.js 22.12 through 26 and npm 11. The repository default is recorded in `.node-version`; use the npm version pinned in `package.json`.

```powershell
npm ci --ignore-scripts
npm run check
npm run audit:ci
```

Use `npm run dev` only for bounded local review and stop the server afterward.

## Change requirements

- Keep every worker, event, cost, path, decision, and metric visibly labeled as synthetic or illustrative.
- Do not imply a backend, live telemetry, execution, enforcement, persistence, provider integration, deployment, revenue, customer, pricing, or protocol conformance that the repository cannot prove.
- Import real TypeScript sources in tests. Do not test copied implementations.
- Preserve keyboard access, visible focus, reduced motion, responsive layouts, and meaningful empty/error states.
- Validate external data with a schema before adding any integration.
- Keep dependencies exact-pinned and explain new runtime dependencies.
- Do not weaken CI, truth checks, security headers, bundle budgets, or workflow permissions to make a change pass.

## Pull requests

Keep changes scoped and include:

- the user outcome and capability boundary;
- actual validation commands and results for the current commit;
- screenshots for visible changes at desktop and mobile widths;
- security, accessibility, performance, and migration notes where relevant;
- any external gate that remains unproven.

The [pull request template](.github/pull_request_template.md) provides a place for this evidence. Drafts and partial contributions are welcome; say what is complete and what remains.

### Validation evidence

Record the commit tested, Node/npm versions, and the result of `npm run check` and `npm run audit:ci`. `check` runs lint, type checking, test coverage, static truth checks, the production build, and the bundle budget. Include useful failure output or a link to the run when a command fails. If a command was not run, write `not run` and explain why; no tests collected is not a passing test result.

For visible changes, attach desktop and mobile screenshots with their viewport sizes. Confirm keyboard access, visible focus, reduced motion, and readable content at narrow widths. For a documentation-only change, state that screenshots are not applicable and list the focused documentation checks performed.

### Issue scope

Link the related issue and explain which acceptance criteria the change covers. Use a closing keyword such as `Closes #123` only when the PR completes the issue's acceptance criteria. Use `Refs #123` for a partial implementation, illustrative excerpt, or follow-up so the remaining work stays open. A fixture screen or example score must remain visibly synthetic or illustrative and must not be presented as verified commercial evidence.

### Fork workflow approval

GitHub may hold workflows from a fork until a maintainer approves them. An `action_required` run is a pending maintainer gate; it is neither a passing check nor evidence that your code failed. Note the pending run in the PR and keep local validation results separate from hosted results. Maintainers inspect the current diff, workflow definitions, and dependency changes before approving a run. Required checks must then complete for the current commit before merge; do not change workflow permissions or remove checks to bypass approval.

Maintainers may require an independent acceptance review for production-impacting or trust-sensitive changes.
