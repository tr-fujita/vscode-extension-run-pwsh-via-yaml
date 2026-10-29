import * as vscode from 'vscode';
import { AssetStorage } from '../assets/AssetStorage';
import { createSample } from './sample/sampleCommand';

export function registerCommands(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.Disposable.from(
    // TODO: [TEMPLATE] 以下にコマンドを列挙します
    createSample(asset)
  );
};
