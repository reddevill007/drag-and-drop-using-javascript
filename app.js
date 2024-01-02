// Function to allow dropping items
function allowDrop(event) {
  event.preventDefault();
}

// Function triggered when dragging starts
function drag(event) {
  // Set the data to be dragged
  event.dataTransfer.setData("text", event.target.id);
}

// Function triggered when dropping an item
function drop(event) {
  event.preventDefault();

  // Get the dragged item's ID from the data transfer
  const data = event.dataTransfer.getData("text");

  // Get the dragged element using the ID
  const draggableElement = document.getElementById(data);

  // Get the drop zone by finding the closest element with the class 'box'
  const dropZone = event.target.closest(".box");

  // Check if there is a drop zone and a draggable element
  if (dropZone && draggableElement) {
    // Append the dragged element to the drop zone
    dropZone.appendChild(draggableElement);
  }
}
