#!/bin/bash

# Function to check if directory is truly empty (including hidden files)
is_directory_empty() {
    local dir="$1"
    # Count all files including hidden ones, excluding . and ..
    local file_count=$(ls -A "$dir" | wc -l)
    [ "$file_count" -eq 0 ]
}

# Function to create template files
create_template_files() {
    local dir="$1"
    # Get the directory name without the path
    local dirname=$(basename "$dir")
    
    # Create JSX file with template
    cat > "${dir}/${dirname}.jsx" << EOF
import css from "./${dirname}.module.css"

const ${dirname} = () => {
    return (<></>);
};

export default ${dirname};
EOF
    
    # Create CSS module file
    echo "/* Styles for ${dirname} component */" > "${dir}/${dirname}.module.css"
    
    echo "Created template files in: $dir"
}

# Main script
echo "Starting to process empty directories..."

# Find all directories from current location
find . -type d | while read -r dir; do
    # Skip the current directory
    [ "$dir" = "." ] && continue
    
    # Check if directory is empty
    if is_directory_empty "$dir"; then
        echo "Processing empty directory: $dir"
        create_template_files "$dir"
    fi
done

echo "Finished processing directories."