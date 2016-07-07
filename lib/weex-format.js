'use babel';

import { CompositeDisposable } from 'atom';
import { html_beautify } from 'js-beautify';

export default {

  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'weex-format:format': () => this.format()
    }));
  },

  format() {
    let editor = atom.workspace.getActiveTextEditor(),
        text = editor.getText();

    if (text) {
      let formattedCode = html_beautify(text);

      editor.setText(formattedCode);
    }
  }
}
