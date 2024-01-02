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

md.use(MarkdownItGitHubAlerts, /* Options */)

const html = md.render(/* ... */)
```

For the options available, please refer to [the jsdoc](./src/index.ts).

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

We also provide some CSS extracted from GitHub's styles for you to use.

```js
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css'
import 'markdown-it-github-alerts/styles/github-base.css'
```

You might change `github-colors-dark-media.css` to `github-colors-dark-class.css` if you are using class-based (`.dark`) dark mode.

Refer to the [source code](./styles) for more details.

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
