const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    const line = document.createElement('div');
    line.classList.add('row');
    for(let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        line.appendChild(box);
    }
    container.appendChild(line);
}
