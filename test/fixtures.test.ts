/// <reference types="vite/client" />

import process from 'node:process'
import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import cssBase from '../styles/github-base.css?raw'
import cssColorsLight from '../styles/github-colors-light.css?raw'
import cssColorsDark from '../styles/github-colors-dark-media.css?raw'
import MarkdownItGitHubAlerts from '../src'

const CSS = `
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

${cssColorsLight}
${cssColorsDark}
${cssBase}
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

        md.use(MarkdownItGitHubAlerts, {
          markers: '*',
        })

        const rendered = [
          md.render(content),
          `<style>${CSS}</style>`,
        ].join('\n').trim().replace(/\r\n/g, '\n')

        expect(rendered)
          .toMatchFileSnapshot(path.replace('input', 'output').replace('.md', '.html'))
      })
    })
})
