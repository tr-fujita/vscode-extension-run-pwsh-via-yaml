function Assert-AzureAuth {
    Write-Host "Checking Azure account..." -ForegroundColor Yellow
    $azAccount = az account show --output json 2>$null | ConvertFrom-Json

    if (-not $azAccount) {
        Write-Host "Azure account was not found.`n"
        Write-Host "Trying login to Azure account..." -ForegroundColor Yellow

        $loginResult = az login --output json 2>$null | ConvertFrom-Json

        if ($LASTEXITCODE -ne 0) {
            Write-Host "Azure login failed." -ForegroundColor Red
            return $false
        } else {
            Write-Host "`n  Logged into Azure.`n`n"
            $loginResult
            return $true
        }
    }

    Write-Host "`n  Authenticated with Azure.`n`n" -ForegroundColor Green
    $azAccount
    return $true
}


Export-ModuleMember -Function Assert-AzureAuth
