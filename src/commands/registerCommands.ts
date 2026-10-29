import * as vscode from 'vscode';
import { createHelloWorldCommand } from './helloWorld/helloWorldCommand';

export function registerCommands(): vscode.Disposable {
  return vscode.Disposable.from(
    // TODO: [TEMPLATE] 以下にコマンドを列挙します
    createHelloWorldCommand()
  );
};
