#!/bin/bash

# Define the folder to check
base="projects/oblique-galaxy/src/lib/"

# Define the expected symbole folder
expected_folders=(
	"components"
	"services"
	"pipes"
	"guards"
	"resolvers"
	"interceptors"
)

# Function to check if a directory contains only expected subfolders
check_folders() {
    local dir="$1"
    local found_folders=()
    for subfolder in "$dir"/*; do
        if [ -d "$subfolder" ]; then
            found_folders+=("$(basename "$subfolder")")
        fi
    done

    for expected_folder in "${expected_folders[@]}"; do
        if ! [[ " ${found_folders[*]} " =~ " $expected_folder " ]]; then
            echo "Error: Folder $expected_folder couldn't be found in $base."
			return 1
        fi
    done
    return 0
}

# Check if folder contains only expected subfolders
if ! check_folders "$base"; then
    exit 1
fi

echo "Folder $base contains only the expected subfolders: ${expected_folders[*]}."
