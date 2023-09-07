#!/bin/bash

# Define the list of components and their categories
components=("Page" "Grid" "Matrix" "Cell" "Center" "Column" "Root" "Row" "Spacer" "Table"
"Badge" "Graph" "Heading" "Icon" "Image" "Poster" "Text" "Tooltip" "Card" "List" "Accordion"
"Avatar" "Audio" "Video" "Tag" "Label" "Field"
"CheckboxSelector" "DatePicker" "TextEditor" "RichTextEditor" "RadioSelector" "DropdownSelector"
"SliderAdjuster" "Submitter" "TimeSelector" "TextAreaEditor" "FileUploader" "Searcher"
"ImageSelector" "RatingSelector" "MultiItemSelector" "DropZoneHandler"
"BottomNav" "Drawer" "IconBar" "Menu" "Paginator" "Tabs" "Breadcrumb" "Sidebar" "Dialog"
"Overlay" "PopOver" "Portal" "Spinner" "Toast" "Progress" "Question" "NestedList" "Expander")

# Create folders for each category
categories=("Layout" "TextMedia" "InputControls" "NavigationFeedback")
for category in "${categories[@]}"; do
  mkdir -p "$category"
done

# Create TypeScript code files for each component in their respective folders
for component in "${components[@]}"; do
  # Determine the category based on component name
  case "$component" in
    "Page" | "Grid" | "Matrix" | "Cell" | "Center" | "Column" | "Root" | "Row" | "Spacer" | "Table")
      category="Layout"
      ;;
    "Badge" | "Graph" | "Heading" | "Icon" | "Image" | "Poster" | "Text" | "Tooltip" | "Card" | "List" | "Accordion" | "Avatar" | "Audio" | "Video" | "Tag" | "Label" | "Field")
      category="TextMedia"
      ;;
    "CheckboxSelector" | "DatePicker" | "TextEditor" | "RichTextEditor" | "RadioSelector" | "DropdownSelector" | "SliderAdjuster" | "Submitter" | "TimeSelector" | "TextAreaEditor" | "FileUploader" | "Searcher" | "ImageSelector" | "RatingSelector" | "MultiItemSelector" | "DropZoneHandler")
      category="InputControls"
      ;;
    *)
      category="NavigationFeedback"
      ;;
  esac

  filename="${category}/${component}.ts"

  # Check if the file already exists
  if [ -f "$filename" ]; then
    echo "File '$filename' already exists. Skipping."
  else
    # Generate TypeScript code for the component and write it to the file
    echo "Creating '$filename'..."
    cat <<EOL > "$filename"
import { css } from '@emotion/css'
import { createElement as $, FC } from 'react';

export interface ${component}Props {
  // props...
}

export const ${component}: FC<${component}Props> = ({}) => {
  return \$('div', {
    className: css({
      // code...
    })
  });
};
EOL
    echo "File '$filename' created successfully."
  fi
done

echo "All TypeScript code files have been generated."
