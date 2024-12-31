# Drag and Drop Photo Upload

This project demonstrates a simple drag-and-drop photo upload functionality using HTML, CSS, and JavaScript. It allows users to drag an image file onto a designated area in the browser, displaying a preview of the uploaded image.

## Features
- Drag and drop a single image file.
- Displays a preview of the uploaded image.
- Highlights the drop area when dragging a file over it.
- Alerts the user if a non-image file is dropped.

## How It Works
1. **HTML**: Sets up the structure with a drop zone (`<div>`) and an image element (`<img>`) for preview.
2. **CSS**: Styles the drop zone and provides a visual cue when a file is dragged over.
3. **JavaScript**: Handles drag-and-drop events and reads the dropped file using a `FileReader` object.

## Files
- `index.html`: Contains the complete code for the drag-and-drop functionality.

## Usage
### Step 1: Open the File
1. Download or copy the `index.html` file.
2. Open the file in a web browser.

### Step 2: Upload an Image
1. Drag an image file (e.g., `.jpg`, `.png`) onto the drop zone.
2. The preview of the uploaded image will appear below the drop zone.

### Step 3: Handle Invalid Files
- If a non-image file is dropped, an alert will notify the user to upload a valid image.

## Code Overview
### HTML Structure
```html
<div id="drop-zone">Drag and drop a photo here</div>
<img id="preview" style="display: none;" alt="Preview">
```
- **`#drop-zone`**: The area where users drag and drop their files.
- **`#preview`**: The image element that displays the uploaded file.

### CSS Highlights
- The `#drop-zone` has a dashed border and a rounded rectangle shape.
- A `highlight` class is added to change the background and border color during file dragover.

### JavaScript Highlights
- **Event Listeners**:
  - `dragover`: Prevents the default behavior and highlights the drop zone.
  - `dragleave`: Removes the highlight when the dragged file leaves the area.
  - `drop`: Processes the dropped file and displays the image preview.

- **File Handling**:
  - Verifies if the dropped file is an image using `file.type.startsWith('image/')`.
  - Uses `FileReader` to read the file and display it in the `img` element.

## Example
### Dragging an Image
1. Drag a photo from your file explorer.
2. Drop it into the drop zone.
3. The photo will display immediately below the drop zone.

### Non-Image File
1. Drag a non-image file.
2. Drop it into the drop zone.
3. An alert will notify: "Please drop an image file."

## Browser Compatibility
This project is compatible with modern browsers that support the `drag-and-drop` API and `FileReader`, such as:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## License
This project is open-source and available for modification and distribution.

