const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello, i am a table builder, give me a number and i give you a table: ', (answer) => {
            resolve(answer);
        });
    });
};

function isNumeric(str) {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

async function main() {

    let n = '';
    while (!isNumeric(n)) {
        n = await question();
        if (!isNumeric(n)) console.log('Not a valid entry');
    }

    n = Number(n);

    let temp = '';
    for (let i = 1; i < 11; i++) {
        temp += `${n} x ${i} = ${n*i} \n`
    }

    console.log(temp)

    rl.close();
}

main();