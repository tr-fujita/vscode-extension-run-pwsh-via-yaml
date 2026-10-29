import * as vscode from 'vscode';
import { registerCommands } from './commands/registerCommands';

const EXTENSION_NAME = "Run PowerShell via yaml";

export function activate(context: vscode.ExtensionContext) {
	console.log(`${EXTENSION_NAME} activated.`);
	vscode.window.showInformationMessage(`${EXTENSION_NAME} activated.`);

	context.subscriptions.push(
		registerCommands()
	);
}

export function deactivate() {
	console.log(`${EXTENSION_NAME} deactivated.`);
}
