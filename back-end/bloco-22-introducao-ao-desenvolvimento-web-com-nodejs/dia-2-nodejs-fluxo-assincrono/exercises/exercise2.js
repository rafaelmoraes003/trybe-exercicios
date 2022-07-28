const { math } = require('./exercise1');

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);

const randMathThenCatch = () => {
    math(n1, n2, n3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
