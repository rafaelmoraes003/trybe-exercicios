const { math } = require('./exercise1');

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);

const randMathAsyncAwait = async () => {
    try {
        const result = await math(n1, n2, n3);
        console.log(result);
    } catch (error) {
        console.log(`[ERROR]: ${error}`);
    }
};
