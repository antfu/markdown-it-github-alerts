/// <reference types="vite/client" />

import process from 'node:process'
import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import { format } from 'prettier'
import MarkdownItGitHubAlerts from '../src'

const CSS = `
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

:root {
  --color-border-default: #888888;
  --color-accent-fg: #0969da;
  --color-success-fg: #1a7f37;
  --color-attention-fg: #9a6700;
  --color-severe-fg: #bc4c00;
  --color-danger-fg: #d1242f;
  --color-done-fg: #8250df;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-accent-fg: #2f81f7;
    --color-success-fg: #3fb950;
    --color-attention-fg: #d29922;
    --color-severe-fg: #db6d28;
    --color-danger-fg: #f85149;
    --color-done-fg: #a371f7;
  }
}

.markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 16px;
  color: inherit;
  border-left: .25em solid var(--color-border-default);
}

.markdown-alert>:first-child {
  margin-top: 0
}

.markdown-alert>:last-child {
  margin-bottom: 0
}

.markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1
}

.markdown-alert .markdown-alert-title .octicon {
  margin-right: 0.5rem;
}

.markdown-alert.markdown-alert-note {
  border-left-color: var(--color-accent-fg);
}

.markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--color-accent-fg);
}

.markdown-alert.markdown-alert-important {
  border-left-color: var(--color-done-fg);
}

.markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--color-done-fg);
}

.markdown-alert.markdown-alert-warning {
  border-left-color: var(--color-attention-fg);
}

.markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--color-attention-fg);
}

.markdown-alert.markdown-alert-tip {
  border-left-color: var(--color-success-fg);
}

.markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--color-success-fg);
}

.markdown-alert.markdown-alert-caution {
  border-left-color: var(--color-danger-fg);
}

.markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--color-danger-fg);
}

.octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}
`

describe('fixtures', () => {
  const files = import.meta.glob('./input/*.md', { as: 'raw', eager: true })
  const filter = process.env.FILTER
  Object.entries(files)
    .forEach(([path, content]) => {
      const run = !filter || path.includes(filter)
        ? it
        : it.skip

      run(`render ${path}`, async () => {
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          xhtmlOut: true,
        })

        md.use(MarkdownItGitHubAlerts)

        const rendered = [
          md.render(content),
          `<style>${CSS}</style>`,
        ].join('\n')

        expect(rendered.trim())
          .toMatchFileSnapshot(path.replace('input', 'output').replace('.md', '.html'))
      })
    })
})
