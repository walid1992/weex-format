#weex-format package 
https://github.com/walid1992/weex-format

```bash
apm install weex-format
```

Or Settings/Preferences ➔ Packages ➔ Search for `weex-format`

## Language Support

- [x] weex, including html, css(not stylus, less, scss) , js (es6)

## Usage

It will beautify .weex file for html,css and js

### Shortcut

You can also type `ctrl-alt-l` as a shortcut or click `Packages > weex-format` in the menu.

#### Custom Keyboard Shortcuts

See [Keymaps In-Depth](https://atom.io/docs/latest/behind-atom-keymaps-in-depth) for more details.

For example:

```coffeescript
'.editor':
  'ctrl-alt-b': 'atom-beautify:beautify-editor'
```

## Configuration

use js-beautify default

### Simple

See [examples/simple-jsbeautifyrc/.jsbeautifyrc](https://github.com/donaldpipowitch/atom-beautify/blob/master/examples/simple-jsbeautifyrc/.jsbeautifyrc).

```json
{
  "indent_size": 2,
  "indent_char": " ",
  "other": " ",
  "indent_level": 0,
  "indent_with_tabs": false,
  "preserve_newlines": true,
  "max_preserve_newlines": 2,
  "jslint_happy": true,
  "indent_handlebars": true
}
```

