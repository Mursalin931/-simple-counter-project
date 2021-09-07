// alert('hi')

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let counter = document.getElementById("count-value");
let count = 0

plus.addEventListener('click', function() {
    count++
    counter.innerHTML = count;
})
minus.addEventListener('click', function() {
    count--
    counter.innerHTML = count;
})


console.log(plus)