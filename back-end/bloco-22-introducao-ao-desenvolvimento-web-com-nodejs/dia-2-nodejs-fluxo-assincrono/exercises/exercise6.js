const readline = require('readline-sync');
const fs = require('fs').promises;

const files = [
    { name: 'file1.txt', path: './txt-files/file1.txt' },
    { name: 'file2.txt', path: './txt-files/file2.txt' },
    { name: 'file3.txt', path: './txt-files/file3.txt' },
    { name: 'file4.txt', path: './txt-files/file4.txt' },
    { name: 'file5.txt', path: './txt-files/file5.txt' },
    { name: 'fileAll.txt', path: './txt-files/fileAll.txt' },
]

const readFiles = async () => {
    const renderFiles = files.map((file, i) => {
        return `\n${file.name} - ${i + 1}`
    });
    
    const message = `Qual arquivo vc deseja ler? ${renderFiles}\n `
    const question = readline.questionInt(message);

    try {
        const data = await fs.readFile(files[question - 1].path, 'utf-8');
        console.log(data);
        const word = readline.question("Qual palavra deseja substituir? ");
        const newWord = readline.question("Qual a nova palavra? ");
        const newPhrase = data.replace(new RegExp(word, 'g'), newWord);
        console.log(newPhrase);
        const filePath = readline.question('Qual o arquivo de destino? ');
        await fs.writeFile(filePath, newPhrase);
    } catch (err) {
        console.log("Arquivo inexistente");
    }
}
