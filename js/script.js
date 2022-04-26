const svg = document.getElementById('svg');
const {x, y, width, height} = svg.viewBox.baseVal;
const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
const url = URL.createObjectURL(blob);
const image = document.createElement('img');
image.src = url;
image.addEventListener('load', ()=> {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.drawImage(image, x, y, width, height);
    const link = document.getElementById('link');
    link.href = canvas.toDataURL ();
    URL.revokeObjectURL(url);
});