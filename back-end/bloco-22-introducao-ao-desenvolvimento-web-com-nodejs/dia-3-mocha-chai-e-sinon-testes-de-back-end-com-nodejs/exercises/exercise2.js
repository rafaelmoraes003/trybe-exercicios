const fs = require('fs').promises;

const writeFileAsync = async (fileName, fileContent) => {
    try {
        await fs.writeFile(fileName, fileContent);
        return "ok!";
    } catch (err) {
        return '[ERROR]';;
    }
}

module.exports = { writeFileAsync };