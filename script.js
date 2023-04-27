const screen = document.querySelector('#screen');
const colors = ['blue', 'red', 'purple', 'black'];
let colorCount = 1;
let grid = prompt('What size grid would you like? (max 100)');

if(grid > 100) {
    grid = 100;
}
console.log(grid);

for(let i = 0; i < grid; i++) {
    const line = document.createElement('div');
    line.classList.add('row');
    for(let j = 0; j < grid; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        line.appendChild(box);
    }
    screen.appendChild(line);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('fill');
    });
});

const html = document.querySelector('html');
const color = document.querySelector('#color');
color.addEventListener('click', () => {
    if(colorCount > colors.length - 1) {
        colorCount = 0;
    }
    html.classList.remove(html.classList[0]);
    html.classList.add(colors[colorCount]);
    colorCount++;
});
