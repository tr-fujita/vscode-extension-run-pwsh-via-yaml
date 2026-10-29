import * as vscode from "vscode";
import { AssetStorage } from "../../assets/AssetStorage";
import { runPowerShellScript } from "../../lib/powerShellRunner";

// TODO: [TEMPLATE] 一意なタスク名を付けます
const TASK_NAME = "SAMPLE TASK";

const sample = async (
  asset: AssetStorage
): Promise<void> => {
  await runPowerShellScript(
    // TODO: [TEMPLATE] ↓ スクリプトのパスを書きます
    asset.getUri("powerShell/scripts/sample.ps1"),
    TASK_NAME
  );
};


export function createSample(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.commands.registerCommand(
    // TODO: [TEMPLATE] ↓ package.json のコマンド名と一致させます
    'template-extension.sample',
    async () => await sample(asset)
  );
}
