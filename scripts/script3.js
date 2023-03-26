function Round(num, points){
    if(isNaN(parseInt(points)) || !isFinite(points) || (points < 0) || (points.toString().includes('.'))){
        return false;
    }else if(isNaN(parseFloat(num)) || !isFinite(num)){
        return false;
    }
    return Math.round(num * 10 ** points)/10 ** points;
}

let n = prompt('Введите строку', '144 34g bdfbd 31 gdf');
let greatest = -Infinity;
let smallest = Infinity;
let strArr = n.split(' ');
document.write('<div class="container">');
document.write('<ul>');
for(let i = 0; i < strArr.length; i++){
    let count = Round(strArr[i], 99);
    document.write('<li>')
    if(count === false){
        document.write(strArr[i] + ' - не число');
    }else{
        count = Number(count);
        if (count > greatest){
            greatest = count;
        }
        if (count < smallest){
            smallest = count;
        }
        document.write(strArr[i] + ' - число');
    }
    document.write('</li>')
}

if(greatest === -Infinity && smallest === Infinity){
    document.write('<li>Чисел в последовательности не было</li>');
}else{
    document.write('<li>Максимальное число = ' + greatest + '</li>');
    document.write('<li>Минимальное число = ' + smallest + '</li>');
}
document.write('</ul>');
document.write('</div>');