const techList = (techs, name) => {
    const list = [];
    const sorted = techs.sort();

    if(sorted.length === 0){
        return "Vazio!";
    }
    for(let index = 0; index < sorted.length; index += 1) {
        list.push({
            tech: sorted[index],
            name: name
        });
    }
    return list;
}

module.exports = techList; 