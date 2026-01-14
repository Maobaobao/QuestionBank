<#
.SYNOPSIS
    Creates SAT Math Question placeholder files based on the project naming convention.
.DESCRIPTION
    Generates .json and _verified.md files for specified models with incrementing order numbers.
    Pattern: {Date}_{OrderNumber}_{ModelName}.json / _verified.md
.PARAMETER TargetDir
    The directory where files will be created. Creates the directory if it does not exist.
.PARAMETER Date
    The date string prefix (format yyyyMMdd). Defaults to current date.
.PARAMETER Loops
    Number of times to iterate through the full list of models.
.PARAMETER StartOrderNumber
    The starting number for the file sequence. Defaults to 1.
.PARAMETER Models
    Array of model names to cycle through. Defaults to ("deepseek_v3.1", "gemini_v3", "grok_v4.1").
.EXAMPLE
    .\create_question_files.ps1 -TargetDir ".\Create\20260111\Algebra" -Loops 2
#>
param (
    [Parameter(Mandatory=$true)]
    [string]$TargetDir,
    
    [string]$Date = (Get-Date -Format "yyyyMMdd"),
    
    [int]$Loops = 1,
    
    [int]$StartOrderNumber = 1,
    
    [string[]]$Models = @("deepseek_v3.1", "gemini_v3", "grok_v4.1", "gpt_v5.2")
)

# Create directory if it doesn't exist (including parents)
if (-not (Test-Path -Path $TargetDir)) {
    try {
        New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
        Write-Host "Created directory: $TargetDir" -ForegroundColor Green
    }
    catch {
        Write-Error "Failed to create directory '$TargetDir': $_"
        exit 1
    }
}

$currentOrder = $StartOrderNumber

Write-Host "Starting file creation..."
Write-Host "  Target: $TargetDir"
Write-Host "  Date:   $Date"
Write-Host "  Models: $($Models -join ', ')"
Write-Host "  Loops:  $Loops"
Write-Host "--------------------------------"

for ($i = 1; $i -le $Loops; $i++) {
    foreach ($model in $Models) {
        # Construct file names
        $jsonFileName = "${Date}_${currentOrder}_${model}.json"
        $mdFileName   = "${Date}_${currentOrder}_${model}_verified.md"
        
        $jsonPath = Join-Path -Path $TargetDir -ChildPath $jsonFileName
        $mdPath   = Join-Path -Path $TargetDir -ChildPath $mdFileName
        
        # Create empty .json file
        if (-not (Test-Path -Path $jsonPath)) {
            New-Item -ItemType File -Path $jsonPath -Force | Out-Null
            Write-Host "  [+] Created: $jsonFileName" -ForegroundColor Cyan
        } else {
            Write-Host "  [!] Skipped: $jsonFileName (Exists)" -ForegroundColor DarkGray
        }

        # Create empty .md file
        if (-not (Test-Path -Path $mdPath)) {
            New-Item -ItemType File -Path $mdPath -Force | Out-Null
            Write-Host "  [+] Created: $mdFileName" -ForegroundColor Cyan
        } else {
             Write-Host "  [!] Skipped: $mdFileName (Exists)" -ForegroundColor DarkGray
        }
        
        $currentOrder++
    }
}

Write-Host "--------------------------------"
Write-Host "Operation completed."
