function factorial(n) {
    switch (n) {
        case 0:
        case 1:
            return 1;
        default:
            return n * factorial(n-1);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello, give me a number and i show you the factorial: ', (answer) => {
            resolve(answer);
        });
    });
};

function isNumeric(str) {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

async function main() {
    let r = '';
    while (!isNumeric(r)) {
        r = await question();
        if (!isNumeric(r) || Number(r) < 0) console.log('Not a valid entry');
    }

    console.log(`The factorial of number ${r} is => ${factorial(Number(r))}`);
    rl.close();
}

main();