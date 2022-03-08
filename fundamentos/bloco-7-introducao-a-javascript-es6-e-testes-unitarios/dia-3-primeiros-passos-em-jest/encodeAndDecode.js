const encode = (array) => {
    for(let index = 0; index < array.length; index += 1){
        if(array[index] === "a"){
            array = array.replace("a", "1");
        } else if(array[index] == "e"){
            array = array.replace("e", "2");
        } else if(array[index] == "i"){
            array = array.replace("i", "3");
        } else if(array[index] == "o"){
            array = array.replace("o", "4");
        } else if(array[index] == "u"){
            array = array.replace("u", "5");
        }
    }
    return array;
}

const decode = (array) => {
    for(let index = 0; index < array.length; index += 1){
        if(array[index] === "1"){
            array = array.replace("1", "a");
        } else if(array[index] == "2"){
            array = array.replace("2", "e");
        } else if(array[index] == "3"){
            array = array.replace("3", "i");
        } else if(array[index] == "4"){
            array = array.replace("4", "o");
        } else if(array[index] == "5"){
            array = array.replace("5", "u");
        }
    }
    return array;
}

module.exports = {encode, decode};