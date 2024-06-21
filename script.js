document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#container');
    const creategridbtn = document.querySelector('#creategrid');
    const resetasketch = document.querySelector('#reset');
    let isMouseDown = false

    function creategrid(size) {
        container.textContent = '';
        container.style.setProperty('--grid-size', size);

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            div.style.width = `calc(960px / ${size})`;
            div.style.height = `calc(960px / ${size})`;
            div.addEventListener('click', color);
            div.addEventListener('mouseover', colorOnHold);
            container.appendChild(div);
        }
    }

    function color(event) {
        const div = event.target;
        div.style.backgroundColor = '#000';
    }

    function colorOnHold(event) {
        if (isMouseDown) {
            color(event);
        }
    }

    function reset() {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
            square.style.backgroundColor = `white`
        });
    }

    document.body.addEventListener('mousedown',() => {
        isMouseDown = true;
    });

    document.body.addEventListener('mouseup',() => {
        isMouseDown = false;
    });

    creategridbtn.addEventListener('click', () => {
        let newSize = prompt('Enter size of the sketch (max: 100)');
        newSize = Math.min(100, Math.max(1, parseInt(newSize, 10) || 16));
        creategrid(newSize);
    });

    resetasketch.addEventListener('click', reset);

    creategrid(16); 
});