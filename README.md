# Linkedin Web Extension

> Adds a custom section in the Linkedin profiles

<p align="center">
<img width="655" src="https://user-images.githubusercontent.com/6775220/142335875-18fea440-c499-467b-884c-78154344c92b.png"><br/>
</p>

A [Vite](https://vitejs.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.).

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**.

For Firefox developers, you can run the following command instead:

```bash
pnpm start:firefox
```

`web-ext` auto reload the extension when `extension/` files changed.

> While Vite handles HMR automatically in the most of the case, [Extensions Reloader](https://chrome.google.com/webstore/detail/fimgfedafeadlieiabdeeaodndnlbhid) is still recommanded for cleaner hard reloading.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`, you can upload `extension.crx` or `extension.xpi` to appropriate extension store.

## Credits

This project uses https://github.com/antfu/vitesse-webext as a boilerplate. All the magic comes from Anthony Fu.
