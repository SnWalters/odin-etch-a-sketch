const container = document.querySelector('#container');
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
    container.appendChild(line);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('fill');
    });
});
