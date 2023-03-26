// 1'st Task

function Round(num, points){
    if(isNaN(parseInt(points)) || !isFinite(points) || (points < 0) || (points.toString().includes('.'))){
        return false;
    }else if(isNaN(parseFloat(num)) || !isFinite(num)){
        return false;
    }
    return Math.round(num * 10 ** points)/10 ** points;
}
function getArmstrong(n){
    let length = n.toString().length;
    let sum = 0;
    while(n > 0){
        sum += (n % 10) ** length;
        n = Math.floor(n / 10);
    }
    return sum;
}
let n = prompt('Введите число n =', '3');
document.write('<div class="container">')
if ((n < 1) || !Round(n, 99))
{
    alert('Ошибочное число');
}else {
    document.write('<ul>')
    for (let i = 1; i <= n; i++) {
        if (i === getArmstrong(i)) {
            document.write('<li>' + i.toString() + '</li>');
        }
    }
    document.write('</ul>');
}
document.write('</div>');

