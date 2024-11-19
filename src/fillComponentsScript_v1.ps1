<#
.SYNOPSIS
Creates .jsx and .module.css files in empty folders and subfolders.

.DESCRIPTION
This script recursively searches for empty folders from its current location and creates two files
in each empty folder: a .jsx file with a provided template and an empty .module.css file.

.NOTES
Author: Assistant
Date: Current Date
#>

# Set the location to the script's directory
Set-Location $PSScriptRoot

# Function to create files in empty folders
function New-FilesInEmptyFolder {
    param (
        [Parameter(Mandatory=$true)]
        [string]$FolderPath
    )

    $folderName = Split-Path $FolderPath -Leaf

    # Create .jsx file
    $jsxContent = @"
import css from "./$folderName.module.css"

const $folderName = () => {
    return (<></>);
};

export default $folderName;
"@

    try {
        $jsxPath = Join-Path $FolderPath "$folderName.jsx"
        $jsxContent | Out-File -FilePath $jsxPath -Encoding utf8
        Write-Host "Created $jsxPath"

        # Create .module.css file
        $cssPath = Join-Path $FolderPath "$folderName.module.css"
        New-Item -Path $cssPath -ItemType File -Force | Out-Null
        Write-Host "Created $cssPath"
    }
    catch {
        Write-Error ("Error creating files in {0}: {1}" -f $FolderPath, $_.Exception.Message)
    }
}

# Get all directories recursively
$allDirectories = Get-ChildItem -Directory -Recurse

# Filter empty directories
$emptyDirectories = $allDirectories | Where-Object {
    (Get-ChildItem $_.FullName -File -Recurse -Force | Measure-Object).Count -eq 0 -and
    (Get-ChildItem $_.FullName -Directory -Recurse -Force | Measure-Object).Count -eq 0
}

# Create files in empty directories
foreach ($dir in $emptyDirectories) {
    New-FilesInEmptyFolder -FolderPath $dir.FullName
}

Write-Host "Script completed."