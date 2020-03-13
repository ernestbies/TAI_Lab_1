let result = '\t';
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
            result += '|' + j + '|\t';
        }
        else if(j == 0 && i>0){
            result += '|' + i + '|\t';
        }
        else if(i>0 && j>0){
            result += (i*j) + '\t';
        }
    }
    result += '\n'
}

console.log(result);
