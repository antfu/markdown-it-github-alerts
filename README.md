# markdown-it-github-alerts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Support [GitHub-style alerts](https://github.com/orgs/community/discussions/16925) for [markdown-it](https://github.com/markdown-it/markdown-it).

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

```
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

## Usage

```bash
npm i markdown-it-github-alerts
```

```js
import MarkdownIt from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'

const md = MarkdownIt()

md.use(MarkdownItGitHubAlerts)

const html = md.render(/* ... */)
```

## Functionality

This plugin transforms the following markdown:

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.
```

to the following HTML:

```html
<div class="markdown-alert markdown-alert-note">
  <p class="markdown-alert-title" dir="auto"><!-- svg icon-->Note</p><p>
  Highlights information that users should take into account, even when skimming.</p>
</div>
```

Which is compatible with the GitHub's output.

### Styling

You can write your custom styles for your alerts.

The following CSS is extracted from GitHub for your reference.

```css
:root {
  --color-note: #0969da;
  --color-tip: #1a7f37;
  --color-warning: #9a6700;
  --color-severe: #bc4c00;
  --color-caution: #d1242f;
  --color-important: #8250df;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-note: #2f81f7;
    --color-tip: #3fb950;
    --color-warning: #d29922;
    --color-severe: #db6d28;
    --color-caution: #f85149;
    --color-important: #a371f7;
  }
}

.markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 16px;
  color: inherit;
  border-left: .25em solid #888;
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
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-alert.markdown-alert-note {
  border-left-color: var(--color-note);
}

.markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--color-note);
}

.markdown-alert.markdown-alert-important {
  border-left-color: var(--color-important);
}

.markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--color-important);
}

.markdown-alert.markdown-alert-warning {
  border-left-color: var(--color-warning);
}

.markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--color-warning);
}

.markdown-alert.markdown-alert-tip {
  border-left-color: var(--color-tip);
}

.markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--color-tip);
}

.markdown-alert.markdown-alert-caution {
  border-left-color: var(--color-caution);
}

.markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--color-caution);
}
```

### Customization

In order to also support [Obsidian callouts syntax](https://help.obsidian.md/Editing+and+formatting/Callouts) it is possible to allow any type of markers with the following setting:

```js
md.use(MarkdownItGitHubAlerts, {
  markers: '*'
})
```
Alternative titles are also supported, by appending it to the marker like this:

```markdown
> [!note] Nota bene
> The custom title will replace the regular title.
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [Anthony Fu](https://github.com/antfu)


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/markdown-it-github-alerts?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/markdown-it-github-alerts
[npm-downloads-src]: https://img.shields.io/npm/dm/markdown-it-github-alerts?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/markdown-it-github-alerts
[bundle-src]: https://img.shields.io/bundlephobia/minzip/markdown-it-github-alerts?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=markdown-it-github-alerts
[license-src]: https://img.shields.io/github/license/antfu/markdown-it-github-alerts.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/markdown-it-github-alerts/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/markdown-it-github-alerts
