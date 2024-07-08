// tareas 1 - 2

// const example = function(a, b, c) {
//     return a + b + c;
// };


// 2
// const suma = (a, b) => a + b;


function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
    pintar(event.target, 'yellow');
});


