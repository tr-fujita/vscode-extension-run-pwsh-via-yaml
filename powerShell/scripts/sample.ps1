# TODO: [TEMPLATE]
## modulesから認証処理を利用したサンプルです。
## 他の [TEMPLATE] も併せて編集してください。

Import-Module "$PSScriptRoot/../modules/Assert-AzureAuth.psm1" -Force
Import-Module "$PSScriptRoot/../modules/Assert-GitHubAuth.psm1" -Force


$isAzAuthed = Assert-AzureAuth

if (-not($isAzAuthed)) {
  Write-Host "`n  Failed to authenticate with Azure.`n`n" -ForegroundColor Red
}


$isGitHubAuthed = Assert-GitHubAuth

if (-not($isGitHubAuthed)) {
  Write-Host "`n  Failed to authenticate with GitHub. `n`n" -ForegroundColor Red
}
