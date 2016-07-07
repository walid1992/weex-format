'use babel';

import weexFormat from '../lib/we-beautify';
import path from 'path';

describe('weexFormat', () => {
  let workspaceElement, activationPromise, filePromise;
  let initialText;
  const filePath = path.resolve(__dirname, '../spec/test.we');

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('we-beautify');
    filePromise = atom.workspace.open(filePath);
  });

  describe('when the we-beautify:beautify event is triggered', () => {
    it('can be formated', () => {

      waitsForPromise(() => {
        return filePromise.then(e => initialText=e.getText());
      });

      runs(() => {
        atom.commands.dispatch(workspaceElement, 'we-beautify:beautify');

        const finalText = atom.workspace.getActiveTextEditor().getText();

        expect(initialText).not.toBe(finalText);
      });
    });
  });
});
