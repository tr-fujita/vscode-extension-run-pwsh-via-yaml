import * as vscode from "vscode";
import { parse } from 'yaml';

export const parseYaml = async (
	yamlUri: vscode.Uri
) => {
	const data = await vscode.workspace.fs.readFile(yamlUri);
	const fileContent = new TextDecoder().decode(data);

	return parse(fileContent);
};
