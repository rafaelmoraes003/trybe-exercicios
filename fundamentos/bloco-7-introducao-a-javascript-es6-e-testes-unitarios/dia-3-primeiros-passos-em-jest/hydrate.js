const hydrate = (text) => {
    let total = 0;
    const numbers = text.match(/\d/g);

    for(let index = 0; index < numbers.length; index += 1){
        total += parseInt(numbers[index]);
    }
    if(total === 1) {
        return '1 copo de água';
    } else if (total > 1){
        return `${total} copos de água`;
    } else{
        return 'Digite alguma bebida';
    }
}

module.exports = hydrate;
