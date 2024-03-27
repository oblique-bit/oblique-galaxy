#!/bin/bash

# Define the folder to check
base="projects/oblique-galaxy/src/lib/"

# Function to check if a directory contains CODEOWNERS and DEPENDENCIES
check_directory() {
	local dir="$1"
	if [ -f "$dir/CODEOWNERS" ] && [ -f "$dir/DEPENDENCIES" ]; then
		return 0
	else
		return 1
	fi
}

for item in "$base"*/*; do
	if [ -d "$item" ]; then
		if ! check_directory "$item"; then
			echo "Error: Directory $item does not contain CODEOWNERS and DEPENDENCIES."
			exit 1
		fi
	else
		echo "Error: $item is not in it's own directory."
		exit 1
	fi
done

echo "All subdirectories in $base contain CODEOWNERS and DEPENDENCIES."
