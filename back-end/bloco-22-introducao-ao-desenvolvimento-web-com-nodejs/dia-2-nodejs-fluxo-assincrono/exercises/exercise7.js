const fizzbuzz = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 0) {
            reject("é necessário um número maior que zero")
        } 

        if (n % 3 === 0 && n % 5 === 0) {
            resolve("FizzBuzz");
        } else if (n % 3 === 0) {
            resolve("Fizz");
        } else if (n % 5 === 0) {
            resolve("Buzz");
        }
        reject(`[ERROR] - ${n}`)
    });
}

const main = async () => {
    try {
        const data = await fizzbuzz(15);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
