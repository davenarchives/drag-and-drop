const dropZone = document.getElementById('drop-zone');
const preview = document.getElementById('preview');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('highlight');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('highlight');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('highlight');

    const file = e.dataTransfer.files[0]; 
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
            preview.src = reader.result; 
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please drop an image file.');
    }
});
