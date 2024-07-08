const colors = ['blue', 'red', 'green', 'yellow'];
colors.forEach(color => {
    const div = document.getElementById(color);
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});

let globalColor = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        globalColor = 'pink';
    } else if (event.key === 's') {
        globalColor = 'orange';
    } else if (event.key === 'd') {
        globalColor = 'lightblue';
    }

    if (['a', 's', 'd'].includes(event.key)) {
        document.getElementById('key').style.backgroundColor = globalColor;
    }

    if (event.key === 'q') {
        creardiv('purple');
    } else if (event.key === 'w') {
        creardiv('gray');
    } else if (event.key === 'e') {
        creardiv('brown');
    }
});

function creardiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}