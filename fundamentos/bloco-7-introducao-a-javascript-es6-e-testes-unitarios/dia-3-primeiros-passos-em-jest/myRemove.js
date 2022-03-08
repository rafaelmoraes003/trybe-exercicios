const myRemove = (array, item) => {
    for (let index = 0; index < array.length; index += 1){
        if(array[index] === item){
            array.splice(array.indexOf(item), 1);
            return array;
        }
    }
    return array;
}

module.exports = myRemove;