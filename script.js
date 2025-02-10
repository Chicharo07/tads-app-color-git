function updateColor() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    document.getElementById('redInput').value = red;
    document.getElementById('greenInput').value = green;
    document.getElementById('blueInput').value = blue;

    applyColor(red, green, blue);
}

function updateColorFromInput() {
    let red = document.getElementById('redInput').value;
    let green = document.getElementById('greenInput').value;
    let blue = document.getElementById('blueInput').value;

    document.getElementById('red').value = red;
    document.getElementById('green').value = green;
    document.getElementById('blue').value = blue;

    applyColor(red, green, blue);
}

function applyColor(red, green, blue) {
    let hexColor = `#${parseInt(red).toString(16).padStart(2, '0')}${parseInt(green).toString(16).padStart(2, '0')}${parseInt(blue).toString(16).padStart(2, '0')}`.toUpperCase();
    document.getElementById('colorBox').style.backgroundColor = hexColor;
    document.getElementById('hexCode').innerText = hexColor;
}

document.getElementById('redInput').addEventListener('input', updateColorFromInput);
document.getElementById('greenInput').addEventListener('input', updateColorFromInput);
document.getElementById('blueInput').addEventListener('input', updateColorFromInput);
