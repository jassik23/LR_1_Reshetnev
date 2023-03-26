//2'nd Task
function Round(num, points){
    if(isNaN(parseInt(points)) || !isFinite(points) || (points < 0) || (points.toString().includes('.'))){
        return false;
    }else if(isNaN(parseFloat(num)) || !isFinite(num)){
        return false;
    }
    return Math.round(num * 10 ** points)/10 ** points;
}
function createLines(num, reverse){
    let min = Round(100 / num, 2);

    let per;
    if(reverse){
        per = 100;
        for(let i = 0; i < num; i++){
            //console.log('<hr width=' + Round(per,2) + '% />');
            document.write('<hr width=' + Round(per,2) + '% />');
            per -= min
        }
    }else{
        per = min;
        for(let i = 0; i < num; i++){
            if(i + 1 === num){
                //console.log('<hr width=100% />');
                document.write('<hr width=100% />');
            }else{
                //console.log('<hr width=' + Round(per,2) + '% />');
                document.write('<hr width=' + Round(per,2) + '% />');
            }
            per += min
        }
    }
}

function createTable(num){
    document.write('<table>');
    for(let i = 0; i < num; i++){
        document.write('<tr>');
        for(let j = 0; j < num; j++){
            if(j !== i && !(j > i + 3) && !(j < i - 3) ){
                document.write('<td class="black" />');
            }else{
                document.write('<td class="white" />');
            }
        }
        document.write('</tr>');
    }
    document.write('</table>');
}


let n = prompt('Введите число n =', '3');

if ((n < 2) || (n > 15) || !Round(n, 99))
{
    alert('Ошибочное число');
}else{
    document.write('<div class="task">');
    n = Number(n);
    createLines(n, true);
    createTable(n);
    createLines(n, false);
    document.write('</div>');
}
