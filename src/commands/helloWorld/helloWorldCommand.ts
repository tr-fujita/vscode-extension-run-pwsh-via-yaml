import * as vscode from "vscode";
import { parseYaml } from "../../lib/parseYaml";
import { runPowerShellScript } from "../../lib/powerShellRunner";
import { validateYamlData } from "../../lib/validateYamlData";
import { yamlSchema } from "./yaml.schema";


const YAML_PATH = "2_Env/41_VsCode/62_ExMak/scripts/hello-world.yaml";


const runHelloWorld = async (): Promise<void> => {
  // aITリポジトリのパス特定（フォルダーを選択してもらいます）
  const aITUri = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: 'aITを選択'
  });
  
  if (!aITUri) {
    return;
  }

  const isConfirmed = await vscode.window.showWarningMessage(
    `以下のスクリプトを実行します。\n ${YAML_PATH}`,
    { modal: true },
    "OK",
    "cancel"
  ) === "OK";

  if (!isConfirmed) {
    return;
  }

  // 以下、yamlファイルを読んでスクリプトを実行します
  
  const yamlUri = vscode.Uri.joinPath(aITUri[0], YAML_PATH);
  const yamlData = await parseYaml(yamlUri);

  return await validateYamlData(
    yamlData,
    yamlSchema,

    async (data) => {
      const scriptPathFromYaml = data.script_execution.path;
      const scriptPath = vscode.Uri.joinPath(
        yamlUri, "..", scriptPathFromYaml 
      );

      await runPowerShellScript(
        scriptPath,
        "RunHelloWorld",
        data.script_execution.arguments ?? ""
      );
    },

    (e) => {
      vscode.window.showErrorMessage(
        `yamlファイルの内容に誤りがあります。\n ${e.message}`
      );
    }
  );
};


export function createHelloWorldCommand(): vscode.Disposable {
  return vscode.commands.registerCommand(
    'run-helloWorld-via-yaml.hello',
    runHelloWorld
  );
}
