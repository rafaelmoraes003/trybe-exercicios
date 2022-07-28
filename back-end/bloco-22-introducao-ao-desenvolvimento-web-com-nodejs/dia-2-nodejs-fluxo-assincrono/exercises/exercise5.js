const fs = require('fs').promises;

const promiseAll = async () => {
    const promises = await Promise.all([
        'Finalmente', 'estou', 'usando', 'Promise.all', '!!!'
    ]);
    
    try {
        promises.forEach(async (promise, index) => {
            await fs.writeFile(`./txt-files/file${index + 1}.txt`, promise);
        })

        const fullTxt = promises.join(' ');
        await fs.writeFile('./txt-files/fileAll.txt', fullTxt)

    } catch (error) {
        console.log(error);
    }
}
