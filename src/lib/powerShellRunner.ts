import * as process from "node:process";
import * as vscode from "vscode";

const TASK_TYPE = "RunPowerShellViaYaml.ShellScript";

export async function runPowerShellScript(
  scriptUri: vscode.Uri,
  taskName: string,
  ...args: (string | vscode.ShellQuotedString)[]
): Promise<void> {
  const isSameTask = vscode.tasks.taskExecutions.some(t =>
    t.task.definition.type === TASK_TYPE &&
    t.task.name === taskName
  );

  if (isSameTask) {
    vscode.window.showErrorMessage(`既に '${taskName}' が実行中です`);
    return;
  }

  const isWindows = process.platform === "win32";
  const shellPath = isWindows ? "powershell.exe" : "pwsh";

  const task = new vscode.Task(
    { type: TASK_TYPE },
    vscode.TaskScope.Workspace,
    taskName,
    "shell script",
    new vscode.ShellExecution(
      shellPath,
      [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", scriptUri.fsPath,
        ...args ?? []
      ]
    )
  );

  await vscode.tasks.executeTask(task);
}
