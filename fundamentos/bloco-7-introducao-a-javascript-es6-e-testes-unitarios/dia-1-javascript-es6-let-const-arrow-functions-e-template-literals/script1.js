//////////////////////////////////////////////// EXERCÍCIO 1

const testingScope = (escopo) => {
    if(escopo){
        let ifScope = `Não devo ser utilizada no escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
}
 testingScope(true)

////////////////////////////////////
 
const oddsAndEvens = [13, 3, 4, 10, 7, 2, 1];
oddsAndEvens.sort((a,b) => a-b)
console.log(`Os números ${oddsAndEvens} estão ordenados em forma crescente!`)

